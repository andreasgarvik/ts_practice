import { MatchReader } from './MatchReader'
import { Summary } from './Summary'
import { WinsAnalysis } from './analyzers/WinsAnalysis'
import { ConsoleReport } from './reportTargets/ConsoleReport'
import { HtmlReport } from './reportTargets/HtmlReport'

const reader = MatchReader.fromCsv('football.csv')
reader.load()

const consoleSummary = new Summary(
	new WinsAnalysis('Man United'),
	new ConsoleReport(),
)
consoleSummary.buildAndPrintReport(reader.matches)

const htmlSummary = new Summary(
	new WinsAnalysis('Man United'),
	new HtmlReport(),
)
htmlSummary.buildAndPrintReport(reader.matches)

const quickSummary = Summary.winsAnalysisWithConsoleReport('Man United')
quickSummary.buildAndPrintReport(reader.matches)
