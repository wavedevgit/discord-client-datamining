package org.chromium.net;

import android.content.Context;
import android.os.Process;
import android.os.SystemClock;
import android.util.Log;
import java.lang.reflect.Method;
import java.net.URL;
import java.net.URLConnection;
import java.net.URLStreamHandlerFactory;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.Date;
import java.util.Iterator;
import java.util.List;
import java.util.Set;
import java.util.concurrent.Executor;
import kv.a;
import org.chromium.net.BidirectionalStream;
import org.chromium.net.ConnectionMigrationOptions;
import org.chromium.net.CronetProvider;
import org.chromium.net.DnsOptions;
import org.chromium.net.ProxyOptions;
import org.chromium.net.QuicOptions;
import org.chromium.net.RequestFinishedInfo;
import org.chromium.net.UrlRequest;
import org.chromium.net.e;
import org.json.JSONObject;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class CronetEngine {
    public static final int ACTIVE_REQUEST_COUNT_UNKNOWN = -1;
    public static final int CONNECTION_METRIC_UNKNOWN = -1;
    public static final int EFFECTIVE_CONNECTION_TYPE_2G = 3;
    public static final int EFFECTIVE_CONNECTION_TYPE_3G = 4;
    public static final int EFFECTIVE_CONNECTION_TYPE_4G = 5;
    public static final int EFFECTIVE_CONNECTION_TYPE_OFFLINE = 1;
    public static final int EFFECTIVE_CONNECTION_TYPE_SLOW_2G = 2;
    public static final int EFFECTIVE_CONNECTION_TYPE_UNKNOWN = 0;
    private static final String TAG = "CronetEngine";
    public static final long UNBIND_NETWORK_HANDLE = -1;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class Builder {
        public static final int HTTP_CACHE_DISABLED = 0;
        public static final int HTTP_CACHE_DISK = 3;
        public static final int HTTP_CACHE_DISK_NO_HTTP = 2;
        public static final int HTTP_CACHE_IN_MEMORY = 1;
        private static final String TAG = "CronetEngine.Builder";
        protected final ICronetEngineBuilder mBuilderDelegate;
        private final List<e.a> mExperimentalOptionsPatches;
        protected JSONObject mParsedExperimentalOptions;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static abstract class LibraryLoader {
            public abstract void loadLibrary(String str);
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public class a implements Comparator {
            a() {
            }

            @Override // java.util.Comparator
            /* renamed from: a */
            public int compare(CronetProvider.a aVar, CronetProvider.a aVar2) {
                if (CronetProvider.PROVIDER_NAME_FALLBACK.equals(aVar.f43426a.getName())) {
                    return 1;
                }
                if (CronetProvider.PROVIDER_NAME_FALLBACK.equals(aVar2.f43426a.getName())) {
                    return -1;
                }
                return -Builder.compareVersions(aVar.f43426a.getVersion(), aVar2.f43426a.getVersion());
            }
        }

        public Builder(Context context) {
            this(createBuilderDelegate(context));
        }

        static int compareVersions(String str, String str2) {
            if (str != null && str2 != null) {
                String[] split = str.split("\\.");
                String[] split2 = str2.split("\\.");
                for (int i10 = 0; i10 < split.length && i10 < split2.length; i10++) {
                    try {
                        int parseInt = Integer.parseInt(split[i10]);
                        int parseInt2 = Integer.parseInt(split2[i10]);
                        if (parseInt != parseInt2) {
                            return Integer.signum(parseInt - parseInt2);
                        }
                    } catch (NumberFormatException e10) {
                        String str3 = split[i10];
                        String str4 = split2[i10];
                        throw new IllegalArgumentException("Unable to convert version segments into integers: " + str3 + " & " + str4, e10);
                    }
                }
                return Integer.signum(split.length - split2.length);
            }
            throw new IllegalArgumentException("The input values cannot be null");
        }

        private static ICronetEngineBuilder createBuilderDelegate(Context context) {
            hv.a a10 = hv.a.a("CronetEngine#createBuilderDelegate");
            try {
                long uptimeMillis = SystemClock.uptimeMillis();
                CronetProvider.a aVar = getEnabledCronetProviders(context, new ArrayList(CronetProvider.getAllProviderInfos(context))).get(0);
                kv.a a11 = kv.d.a(context, aVar.f43427b);
                a.C0473a c0473a = new a.C0473a();
                c0473a.f35591e = Boolean.FALSE;
                c0473a.f35588b = a.C0473a.EnumC0474a.API;
                c0473a.f35590d = aVar.f43427b;
                c0473a.f35594h = Process.myUid();
                c0473a.f35592f = new a.c(ApiVersion.getCronetVersion());
                if (Log.isLoggable(TAG, 3)) {
                    Log.d(TAG, String.format("Using '%s' provider for creating CronetEngine.Builder.", aVar.f43426a));
                }
                ICronetEngineBuilder iCronetEngineBuilder = aVar.f43426a.createBuilder().mBuilderDelegate;
                String implCronetVersion = getImplCronetVersion(iCronetEngineBuilder);
                if (implCronetVersion != null) {
                    c0473a.f35593g = new a.c(implCronetVersion);
                }
                c0473a.f35587a = iCronetEngineBuilder.getLogCronetInitializationRef();
                c0473a.f35591e = Boolean.TRUE;
                c0473a.f35589c = (int) (SystemClock.uptimeMillis() - uptimeMillis);
                a11.a(c0473a);
                if (a10 != null) {
                    a10.close();
                }
                return iCronetEngineBuilder;
            } catch (Throwable th2) {
                if (a10 != null) {
                    try {
                        a10.close();
                    } catch (Throwable th3) {
                        th2.addSuppressed(th3);
                    }
                }
                throw th2;
            }
        }

        static List<CronetProvider.a> getEnabledCronetProviders(Context context, List<CronetProvider.a> list) {
            if (!list.isEmpty()) {
                Iterator<CronetProvider.a> it = list.iterator();
                while (it.hasNext()) {
                    if (!it.next().f43426a.isEnabled()) {
                        it.remove();
                    }
                }
                if (!list.isEmpty()) {
                    Collections.sort(list, new a());
                    return list;
                }
                throw new RuntimeException("All available Cronet providers are disabled. A provider should be enabled before it can be used.");
            }
            throw new RuntimeException("Unable to find any Cronet provider. Have you included all necessary jars?");
        }

        private static int getImplApiLevel(ICronetEngineBuilder iCronetEngineBuilder) {
            try {
                Method implVersionMethod = getImplVersionMethod(iCronetEngineBuilder, "getApiLevel");
                if (implVersionMethod == null) {
                    return -1;
                }
                return ((Integer) implVersionMethod.invoke(null, null)).intValue();
            } catch (ReflectiveOperationException e10) {
                throw new RuntimeException("Failed to retrieve Cronet impl API level", e10);
            }
        }

        private static String getImplCronetVersion(ICronetEngineBuilder iCronetEngineBuilder) {
            try {
                Method implVersionMethod = getImplVersionMethod(iCronetEngineBuilder, "getCronetVersion");
                if (implVersionMethod == null) {
                    return null;
                }
                return (String) implVersionMethod.invoke(null, null);
            } catch (ReflectiveOperationException e10) {
                throw new RuntimeException("Failed to retrieve Cronet impl version", e10);
            }
        }

        private static Method getImplVersionMethod(ICronetEngineBuilder iCronetEngineBuilder, String str) {
            try {
                return iCronetEngineBuilder.getClass().getClassLoader().loadClass("org.chromium.net.impl.ImplVersion").getMethod(str, null);
            } catch (ClassNotFoundException | NoSuchMethodException unused) {
                return null;
            }
        }

        private int getMaximumApiLevel() {
            return ApiVersion.getMaximumAvailableApiLevel();
        }

        private void maybeSetExperimentalOptions() {
            JSONObject a10 = e.a(this.mParsedExperimentalOptions, this.mExperimentalOptionsPatches);
            if (a10 != null) {
                this.mBuilderDelegate.setExperimentalOptions(a10.toString());
            }
        }

        public Builder addPublicKeyPins(String str, Set<byte[]> set, boolean z10, Date date) {
            this.mBuilderDelegate.addPublicKeyPins(str, set, z10, date);
            return this;
        }

        public Builder addQuicHint(String str, int i10, int i11) {
            this.mBuilderDelegate.addQuicHint(str, i10, i11);
            return this;
        }

        public CronetEngine build() {
            return buildExperimental();
        }

        /* JADX INFO: Access modifiers changed from: protected */
        public ExperimentalCronetEngine buildExperimental() {
            int implApiLevel = getImplApiLevel(this.mBuilderDelegate);
            if (implApiLevel != -1 && implApiLevel < getMaximumApiLevel()) {
                Log.w(TAG, "The implementation version is lower than the API version. Calls to methods added in API " + (implApiLevel + 1) + " and newer will likely have no effect.");
            }
            maybeSetExperimentalOptions();
            return this.mBuilderDelegate.build();
        }

        public Builder enableBrotli(boolean z10) {
            this.mBuilderDelegate.enableBrotli(z10);
            return this;
        }

        public Builder enableHttp2(boolean z10) {
            this.mBuilderDelegate.enableHttp2(z10);
            return this;
        }

        public Builder enableHttpCache(int i10, long j10) {
            this.mBuilderDelegate.enableHttpCache(i10, j10);
            return this;
        }

        public Builder enableNetworkQualityEstimator(boolean z10) {
            this.mBuilderDelegate.enableNetworkQualityEstimator(z10);
            return this;
        }

        public Builder enablePublicKeyPinningBypassForLocalTrustAnchors(boolean z10) {
            this.mBuilderDelegate.enablePublicKeyPinningBypassForLocalTrustAnchors(z10);
            return this;
        }

        public Builder enableQuic(boolean z10) {
            this.mBuilderDelegate.enableQuic(z10);
            return this;
        }

        @Deprecated
        public Builder enableSdch(boolean z10) {
            return this;
        }

        public String getDefaultUserAgent() {
            return this.mBuilderDelegate.getDefaultUserAgent();
        }

        @ConnectionMigrationOptions.Experimental
        public Builder setConnectionMigrationOptions(final ConnectionMigrationOptions connectionMigrationOptions) {
            if (this.mBuilderDelegate.getSupportedConfigOptions().contains(1)) {
                this.mBuilderDelegate.setConnectionMigrationOptions(connectionMigrationOptions);
                return this;
            }
            this.mExperimentalOptionsPatches.add(new e.a() { // from class: org.chromium.net.c
                @Override // org.chromium.net.e.a
                public final void a(JSONObject jSONObject) {
                    e.b(jSONObject, ConnectionMigrationOptions.this);
                }
            });
            return this;
        }

        @DnsOptions.Experimental
        public Builder setDnsOptions(final DnsOptions dnsOptions) {
            if (this.mBuilderDelegate.getSupportedConfigOptions().contains(2)) {
                this.mBuilderDelegate.setDnsOptions(dnsOptions);
                return this;
            }
            this.mExperimentalOptionsPatches.add(new e.a() { // from class: org.chromium.net.d
                @Override // org.chromium.net.e.a
                public final void a(JSONObject jSONObject) {
                    e.d(jSONObject, DnsOptions.this);
                }
            });
            return this;
        }

        public Builder setLibraryLoader(LibraryLoader libraryLoader) {
            this.mBuilderDelegate.setLibraryLoader(libraryLoader);
            return this;
        }

        @ProxyOptions.Experimental
        public Builder setProxyOptions(ProxyOptions proxyOptions) {
            if (this.mBuilderDelegate.getSupportedConfigOptions().contains(4)) {
                this.mBuilderDelegate.setProxyOptions(proxyOptions);
                return this;
            }
            throw new UnsupportedOperationException("This Cronet implementation does not support ProxyOptions");
        }

        @QuicOptions.Experimental
        public Builder setQuicOptions(final QuicOptions quicOptions) {
            if (this.mBuilderDelegate.getSupportedConfigOptions().contains(3)) {
                this.mBuilderDelegate.setQuicOptions(quicOptions);
                return this;
            }
            this.mExperimentalOptionsPatches.add(new e.a() { // from class: org.chromium.net.b
                @Override // org.chromium.net.e.a
                public final void a(JSONObject jSONObject) {
                    e.e(jSONObject, QuicOptions.this);
                }
            });
            return this;
        }

        public Builder setStoragePath(String str) {
            this.mBuilderDelegate.setStoragePath(str);
            return this;
        }

        @Deprecated
        public Builder setThreadPriority(int i10) {
            this.mBuilderDelegate.setThreadPriority(i10);
            return this;
        }

        public Builder setUserAgent(String str) {
            this.mBuilderDelegate.setUserAgent(str);
            return this;
        }

        public Builder(ICronetEngineBuilder iCronetEngineBuilder) {
            this.mExperimentalOptionsPatches = new ArrayList();
            this.mBuilderDelegate = iCronetEngineBuilder;
        }

        @ConnectionMigrationOptions.Experimental
        public Builder setConnectionMigrationOptions(ConnectionMigrationOptions.Builder builder) {
            return setConnectionMigrationOptions(builder.build());
        }

        @DnsOptions.Experimental
        public Builder setDnsOptions(DnsOptions.Builder builder) {
            return setDnsOptions(builder.build());
        }

        @QuicOptions.Experimental
        public Builder setQuicOptions(QuicOptions.Builder builder) {
            return setQuicOptions(builder.build());
        }
    }

    public void addRequestFinishedListener(RequestFinishedInfo.Listener listener) {
    }

    public void addRttListener(NetworkQualityRttListener networkQualityRttListener) {
    }

    public void addThroughputListener(NetworkQualityThroughputListener networkQualityThroughputListener) {
    }

    public void bindToNetwork(long j10) {
    }

    public void configureNetworkQualityEstimatorForTesting(boolean z10, boolean z11, boolean z12) {
    }

    public abstract URLStreamHandlerFactory createURLStreamHandlerFactory();

    public int getActiveRequestCount() {
        return -1;
    }

    public int getDownstreamThroughputKbps() {
        return -1;
    }

    public int getEffectiveConnectionType() {
        return 0;
    }

    @Deprecated
    public abstract byte[] getGlobalMetricsDeltas();

    public int getHttpRttMs() {
        return -1;
    }

    public int getTransportRttMs() {
        return -1;
    }

    public abstract String getVersionString();

    public BidirectionalStream.Builder newBidirectionalStreamBuilder(String str, BidirectionalStream.Callback callback, Executor executor) {
        throw new UnsupportedOperationException("Not implemented.");
    }

    public abstract UrlRequest.Builder newUrlRequestBuilder(String str, UrlRequest.Callback callback, Executor executor);

    public abstract URLConnection openConnection(URL url);

    public void removeRequestFinishedListener(RequestFinishedInfo.Listener listener) {
    }

    public void removeRttListener(NetworkQualityRttListener networkQualityRttListener) {
    }

    public void removeThroughputListener(NetworkQualityThroughputListener networkQualityThroughputListener) {
    }

    public abstract void shutdown();

    public void startNetLogToDisk(String str, boolean z10, int i10) {
    }

    public abstract void startNetLogToFile(String str, boolean z10);

    public abstract void stopNetLog();
}
