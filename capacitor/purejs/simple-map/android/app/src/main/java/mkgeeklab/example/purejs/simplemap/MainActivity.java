package mkgeeklab.example.purejs.simplemap;

import android.os.Bundle;

import com.getcapacitor.BridgeActivity;

import mkgeeklab.bridge.capacitor.CapacitorBridge;

public class MainActivity extends BridgeActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        registerPlugin(CapacitorBridge.class);
    }
}
