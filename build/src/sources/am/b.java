package am;

import android.net.ConnectivityManager;
import android.net.wifi.WifiInfo;
import android.net.wifi.WifiManager;
import android.os.Build;
import android.telephony.TelephonyManager;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;
import com.facebook.react.views.text.internal.span.SetSpanOperation;
import java.math.BigInteger;
import java.net.Inet4Address;
import java.net.InetAddress;
import java.net.InterfaceAddress;
import java.net.NetworkInterface;
import java.util.Enumeration;
import java.util.Iterator;
import java.util.Locale;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class b {

    /* renamed from: a  reason: collision with root package name */
    private final ConnectivityManager f703a;

    /* renamed from: b  reason: collision with root package name */
    private final WifiManager f704b;

    /* renamed from: c  reason: collision with root package name */
    private final TelephonyManager f705c;

    /* renamed from: d  reason: collision with root package name */
    private final ReactApplicationContext f706d;

    /* renamed from: e  reason: collision with root package name */
    public boolean f707e = false;

    /* renamed from: f  reason: collision with root package name */
    private bm.b f708f = bm.b.UNKNOWN;

    /* renamed from: g  reason: collision with root package name */
    private bm.a f709g = null;

    /* renamed from: h  reason: collision with root package name */
    private boolean f710h = false;

    /* renamed from: i  reason: collision with root package name */
    private Boolean f711i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(ReactApplicationContext reactApplicationContext) {
        this.f706d = reactApplicationContext;
        this.f703a = (ConnectivityManager) reactApplicationContext.getSystemService("connectivity");
        this.f704b = (WifiManager) reactApplicationContext.getApplicationContext().getSystemService("wifi");
        this.f705c = (TelephonyManager) reactApplicationContext.getSystemService("phone");
    }

    private WritableMap b(String str) {
        WifiManager wifiManager;
        WifiInfo connectionInfo;
        WritableMap createMap = Arguments.createMap();
        str.getClass();
        char c10 = 65535;
        switch (str.hashCode()) {
            case -1419358249:
                if (str.equals("ethernet")) {
                    c10 = 0;
                    break;
                }
                break;
            case -916596374:
                if (str.equals("cellular")) {
                    c10 = 1;
                    break;
                }
                break;
            case 3649301:
                if (str.equals("wifi")) {
                    c10 = 2;
                    break;
                }
                break;
        }
        switch (c10) {
            case 0:
                try {
                    Enumeration<NetworkInterface> networkInterfaces = NetworkInterface.getNetworkInterfaces();
                    while (networkInterfaces.hasMoreElements()) {
                        Enumeration<InetAddress> inetAddresses = networkInterfaces.nextElement().getInetAddresses();
                        while (inetAddresses.hasMoreElements()) {
                            InetAddress nextElement = inetAddresses.nextElement();
                            if (!nextElement.isLoopbackAddress() && (nextElement instanceof Inet4Address)) {
                                createMap.putString("ipAddress", nextElement.getHostAddress());
                                createMap.putString("subnet", f(nextElement));
                                return createMap;
                            }
                        }
                    }
                    break;
                } catch (Exception e10) {
                    e10.printStackTrace();
                    break;
                }
                break;
            case 1:
                bm.a aVar = this.f709g;
                if (aVar != null) {
                    createMap.putString("cellularGeneration", aVar.f6630d);
                }
                String networkOperatorName = this.f705c.getNetworkOperatorName();
                if (networkOperatorName != null) {
                    createMap.putString("carrier", networkOperatorName);
                    return createMap;
                }
                break;
            case 2:
                if (d.b(e()) && (wifiManager = this.f704b) != null && (connectionInfo = wifiManager.getConnectionInfo()) != null) {
                    try {
                        String ssid = connectionInfo.getSSID();
                        if (ssid != null && !ssid.contains("<unknown ssid>")) {
                            createMap.putString("ssid", ssid.replace("\"", ""));
                        }
                    } catch (Exception unused) {
                    }
                    try {
                        String bssid = connectionInfo.getBSSID();
                        if (bssid != null) {
                            createMap.putString("bssid", bssid);
                        }
                    } catch (Exception unused2) {
                    }
                    try {
                        createMap.putInt("strength", WifiManager.calculateSignalLevel(connectionInfo.getRssi(), 100));
                    } catch (Exception unused3) {
                    }
                    try {
                        createMap.putInt("frequency", connectionInfo.getFrequency());
                    } catch (Exception unused4) {
                    }
                    try {
                        byte[] byteArray = BigInteger.valueOf(connectionInfo.getIpAddress()).toByteArray();
                        d.c(byteArray);
                        createMap.putString("ipAddress", InetAddress.getByAddress(byteArray).getHostAddress());
                    } catch (Exception unused5) {
                    }
                    try {
                        byte[] byteArray2 = BigInteger.valueOf(connectionInfo.getIpAddress()).toByteArray();
                        d.c(byteArray2);
                        createMap.putString("subnet", f(InetAddress.getByAddress(byteArray2)));
                    } catch (Exception unused6) {
                    }
                    try {
                        createMap.putInt("linkSpeed", connectionInfo.getLinkSpeed());
                    } catch (Exception unused7) {
                    }
                    try {
                        if (Build.VERSION.SDK_INT >= 29) {
                            createMap.putInt("rxLinkSpeed", connectionInfo.getRxLinkSpeedMbps());
                        }
                    } catch (Exception unused8) {
                    }
                    try {
                        if (Build.VERSION.SDK_INT >= 29) {
                            createMap.putInt("txLinkSpeed", connectionInfo.getTxLinkSpeedMbps());
                            break;
                        }
                    } catch (Exception unused9) {
                        break;
                    }
                }
                break;
        }
        return createMap;
    }

    private static String f(InetAddress inetAddress) {
        short s10;
        Iterator<InterfaceAddress> it = NetworkInterface.getByInetAddress(inetAddress).getInterfaceAddresses().iterator();
        while (true) {
            if (it.hasNext()) {
                InterfaceAddress next = it.next();
                if (next.getAddress().getAddress().length == 4) {
                    s10 = next.getNetworkPrefixLength();
                    break;
                }
            } else {
                s10 = 0;
                break;
            }
        }
        int i10 = (-1) << (32 - s10);
        return String.format(Locale.US, "%d.%d.%d.%d", Integer.valueOf((i10 >> 24) & SetSpanOperation.SPAN_MAX_PRIORITY), Integer.valueOf((i10 >> 16) & SetSpanOperation.SPAN_MAX_PRIORITY), Integer.valueOf((i10 >> 8) & SetSpanOperation.SPAN_MAX_PRIORITY), Integer.valueOf(i10 & SetSpanOperation.SPAN_MAX_PRIORITY));
    }

    protected WritableMap a(String str) {
        String str2;
        boolean z10;
        boolean z11;
        WritableMap createMap = Arguments.createMap();
        boolean z12 = false;
        if (d.b(e())) {
            WifiManager wifiManager = this.f704b;
            if (wifiManager != null) {
                z11 = wifiManager.isWifiEnabled();
            } else {
                z11 = false;
            }
            createMap.putBoolean("isWifiEnabled", z11);
        }
        if (str != null) {
            str2 = str;
        } else {
            str2 = this.f708f.f6640d;
        }
        createMap.putString("type", str2);
        boolean z13 = true;
        if (!this.f708f.equals(bm.b.NONE) && !this.f708f.equals(bm.b.UNKNOWN)) {
            z10 = true;
        } else {
            z10 = false;
        }
        createMap.putBoolean("isConnected", z10);
        if (this.f710h && (str == null || str.equals(this.f708f.f6640d))) {
            z12 = true;
        }
        createMap.putBoolean("isInternetReachable", z12);
        if (str == null) {
            str = this.f708f.f6640d;
        }
        WritableMap b10 = b(str);
        if (z10) {
            if (c() != null) {
                z13 = c().isActiveNetworkMetered();
            }
            b10.putBoolean("isConnectionExpensive", z13);
        }
        createMap.putMap("details", b10);
        return createMap;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public ConnectivityManager c() {
        return this.f703a;
    }

    public void d(String str, Promise promise) {
        promise.resolve(a(str));
    }

    ReactApplicationContext e() {
        return this.f706d;
    }

    public abstract void g();

    protected void h() {
        ((DeviceEventManagerModule.RCTDeviceEventEmitter) e().getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)).emit("netInfo.networkStatusDidChange", a(null));
    }

    public void i(boolean z10) {
        this.f711i = Boolean.valueOf(z10);
        k(this.f708f, this.f709g, this.f710h);
    }

    public abstract void j();

    /* JADX INFO: Access modifiers changed from: package-private */
    public void k(bm.b bVar, bm.a aVar, boolean z10) {
        boolean z11;
        boolean z12;
        Boolean bool = this.f711i;
        if (bool != null) {
            z10 = bool.booleanValue();
        }
        boolean z13 = false;
        if (bVar != this.f708f) {
            z11 = true;
        } else {
            z11 = false;
        }
        if (aVar != this.f709g) {
            z12 = true;
        } else {
            z12 = false;
        }
        if (z10 != this.f710h) {
            z13 = true;
        }
        if (z11 || z12 || z13) {
            this.f708f = bVar;
            this.f709g = aVar;
            this.f710h = z10;
            if (this.f707e) {
                h();
            }
        }
    }
}
