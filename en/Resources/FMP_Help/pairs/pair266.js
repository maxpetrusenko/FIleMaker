var pairs =
{
"get":{"scriptna":1,"scriptname":1,"script":1,"current":1,"running":1}
,"scriptna":{"returns":1}
,"returns":{"name":1,"print":1,"update":1}
,"name":{"script":1,"get":1}
,"script":{"currently":1,"running":1,"name":1}
,"currently":{"running":1}
,"running":{"paused":1,"returns":1,"get":1,"script":1}
,"paused":{"get":1}
,"scriptname":{"none":1,"get":1}
,"none":{"text":1}
,"text":{"filemaker":1}
,"filemaker":{"pro":1}
,"pro":{"6.0":1}
,"6.0":{"earlier":1}
,"earlier":{"returns":1}
,"print":{"report":1}
,"report":{"print":1,"script":1}
,"update":{"customer":1}
,"customer":{"update":1,"script":1}
,"current":{"script":1}
}
;Search.control.loadWordPairs(pairs);