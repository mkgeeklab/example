package mkgeeklab.googlemaps.core.base

import android.app.Activity
import android.content.res.Resources
import kotlinx.coroutines.flow.MutableStateFlow

open class PluginBase(
    private val activity: Activity,
) {

    data class PluginState(
        val isRemoved: Boolean = false,
    )

    private val _pluginState: MutableStateFlow<PluginState> = MutableStateFlow(PluginState())


    companion object {
        val zoomScale = Resources.getSystem().displayMetrics.density
    }
}
