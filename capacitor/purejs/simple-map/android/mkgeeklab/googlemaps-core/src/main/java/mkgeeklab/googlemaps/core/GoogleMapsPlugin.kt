package mkgeeklab.googlemaps.core

import android.app.Activity
import android.util.Log
import android.webkit.WebView

class GoogleMapsPlugin(
    activity: Activity,
    webView: WebView,
) {
    fun printHelloWorld() {
        Log.d("GoogleMaps", "Hello world")
    }
}
