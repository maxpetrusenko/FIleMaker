var pairs =
{
"logical":{"functions":1}
,"functions":{"logical":1,"test":1,"operators":1,"evaluate":1}
,"test":{"condition":1,"true":1,"false":1}
,"condition":{"evaluate":1,"true":1,"false":1}
,"evaluate":{"true":1,"parameters":1,"evaluates":1}
,"true":{"false":1,"filemaker":1,"returns":1,"if":1,"isvalidexpression":1}
,"false":{"boolean":1,"filemaker":1,"logical":1,"returns":1,"statement":1,"getfield":1,"isempty":1,"isvalid":1,"if":1,"let":1}
,"boolean":{"value":1}
,"value":{"if":1,"keyword":1,"integer":1,"est":1,"summaryfield":1,"sourcefield":1,"elf":1}
,"if":{"condition":1,"xpression":1,"ata":1,"container":1,"result1":1,"test":1,"field":1,"data":1}
,"filemaker":{"pro":1}
,"pro":{"advanced":1}
,"advanced":{"returns":1,"file":1}
,"returns":{"if":1,"use":1,"keyword":1,"logical":1,"case":1,"false":1,"contents":1,"result2":1,"true":1}
,"use":{"keywords":1}
,"keywords":{"true":1}
,"operators":{"boolean":1}
,"keyword":{"true":1,"false":1}
,"parameters":{"text":1}
,"text":{"arithmetic":1}
,"arithmetic":{"operations":1}
,"operations":{"true":1}
,"statement":{"case":1,"table":1}
,"case":{"getfield":1,"based":1}
,"getfield":{"function":1,"evaluates":1}
,"function":{"return":1,"returns":1}
,"return":{"contents":1}
,"contents":{"field":1,"fieldname":1}
,"field":{"function":1,"holds":1,"getnthrecord":1,"empty":1}
,"based":{"series":1}
,"series":{"tests":1}
,"tests":{"choose":1}
,"choose":{"result":1}
,"result":{"value":1,"variable":1,"expression":1}
,"integer":{"value":1}
,"est":{"evaluate":1}
,"evaluates":{"expression":1,"fieldname":1}
,"expression":{"calculation":1,"duration":1}
,"calculation":{"evaluationerror":1,"script":1,"defined":1}
,"evaluationerror":{"error":1}
,"error":{"code":1}
,"code":{"if":1}
,"xpression":{"executesql":1,"syntax":1}
,"executesql":{"executes":1}
,"executes":{"sql":1}
,"sql":{"query":1}
,"query":{"statement":1}
,"table":{"occurrence":1}
,"occurrence":{"filemaker":1}
,"file":{"getasboolean":1,"sorted":1,"closed":1}
,"getasboolean":{"true":1}
,"ata":{"converts":1}
,"converts":{"non-zero":1}
,"non-zero":{"numeric":1}
,"numeric":{"valu":1}
,"valu":{"if":1}
,"container":{"field":1}
,"holds":{"data":1}
,"data":{"returns":1,"invalid":1}
,"fieldname":{"returns":1,"record":1}
,"getnthrecord":{"contents":1}
,"record":{"number":1}
,"number":{"getsummary":1}
,"getsummary":{"value":1}
,"summaryfield":{"current":1}
,"current":{"range":1}
,"range":{"records":1}
,"records":{"file":1}
,"sorted":{"by":1}
,"by":{"breakfield":1}
,"breakfield":{"if":1}
,"result1":{"if":1}
,"result2":{"if":1}
,"isempty":{"true":1}
,"empty":{"errors":1}
,"errors":{"occur":1}
,"occur":{"returns":1}
,"isvalid":{"false":1}
,"invalid":{"returns":1}
,"isvalidexpression":{"true":1}
,"syntax":{"correct":1}
,"correct":{"returns":1}
,"let":{"result":1}
,"variable":{"variables":1}
,"variables":{"set":1}
,"set":{"result":1}
,"duration":{"calculation":1}
,"script":{"exits":1}
,"exits":{"file":1}
,"closed":{"lookup":1}
,"lookup":{"value":1}
,"sourcefield":{"relationships":1,"isn\u2019t":1}
,"relationships":{"relationships":1,"graph":1}
,"graph":{"lookupnext":1}
,"lookupnext":{"next":1}
,"next":{"lower":1}
,"lower":{"value":1}
,"isn\u2019t":{"matching":1}
,"matching":{"related":1}
,"related":{"value":1}
,"elf":{"content":1}
,"content":{"object":1}
,"object":{"calculation":1}
}
;Search.control.loadWordPairs(pairs);