package com.facebook.react.devsupport;

import android.os.Handler;
import android.os.Looper;
import com.facebook.jni.HybridData;
import com.facebook.soloader.SoLoader;
import java.io.Closeable;
import java.util.concurrent.TimeUnit;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.WebSocket;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000 \n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0002\b\b\b\u0000\u0018\u0000 \u00122\u00020\u0001:\u0004\u000f\u0010\u0011\u0012B\u001f\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0003\u0012\u0006\u0010\u0005\u001a\u00020\u0003¢\u0006\u0004\b\u0006\u0010\u0007J\t\u0010\n\u001a\u00020\u000bH\u0096 J\t\u0010\f\u001a\u00020\u000bH\u0096 J\u0013\u0010\r\u001a\u00020\u000b2\b\u0010\u000e\u001a\u0004\u0018\u00010\u0003H\u0096 R\u0010\u0010\b\u001a\u00020\t8\u0002X\u0083\u0004¢\u0006\u0002\n\u0000¨\u0006\u0013"}, d2 = {"Lcom/facebook/react/devsupport/CxxInspectorPackagerConnection;", "Lcom/facebook/react/devsupport/IInspectorPackagerConnection;", "url", "", "deviceName", "packageName", "<init>", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V", "mHybridData", "Lcom/facebook/jni/HybridData;", "connect", "", "closeQuietly", "sendEventToAllConnections", "event", "WebSocketDelegate", "IWebSocket", "DelegateImpl", "Companion", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class CxxInspectorPackagerConnection implements IInspectorPackagerConnection {
    @NotNull
    public static final Companion Companion = new Companion(null);
    @fb.a
    @NotNull
    private final HybridData mHybridData;

    @Metadata(d1 = {"\u0000 \n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J)\u0010\u0004\u001a\u00020\u00052\u0006\u0010\u0006\u001a\u00020\u00072\u0006\u0010\b\u001a\u00020\u00072\u0006\u0010\t\u001a\u00020\u00072\u0006\u0010\n\u001a\u00020\u000bH\u0083 ¨\u0006\f"}, d2 = {"Lcom/facebook/react/devsupport/CxxInspectorPackagerConnection$Companion;", "", "<init>", "()V", "initHybrid", "Lcom/facebook/jni/HybridData;", "url", "", "deviceName", "packageName", "delegate", "Lcom/facebook/react/devsupport/CxxInspectorPackagerConnection$DelegateImpl;", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final HybridData initHybrid(String str, String str2, String str3, DelegateImpl delegateImpl) {
            return CxxInspectorPackagerConnection.initHybrid(str, str2, str3, delegateImpl);
        }

        private Companion() {
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    @Metadata(d1 = {"\u0000<\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\t\n\u0000\b\u0002\u0018\u00002\u00020\u0001B\u0007¢\u0006\u0004\b\u0002\u0010\u0003J\u001a\u0010\b\u001a\u00020\t2\b\u0010\n\u001a\u0004\u0018\u00010\u000b2\u0006\u0010\f\u001a\u00020\rH\u0007J\u0018\u0010\u000e\u001a\u00020\u000f2\u0006\u0010\u0010\u001a\u00020\u00112\u0006\u0010\u0012\u001a\u00020\u0013H\u0007R\u000e\u0010\u0004\u001a\u00020\u0005X\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\u0006\u001a\u00020\u0007X\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006\u0014"}, d2 = {"Lcom/facebook/react/devsupport/CxxInspectorPackagerConnection$DelegateImpl;", "", "<init>", "()V", "httpClient", "Lokhttp3/OkHttpClient;", "mHandler", "Landroid/os/Handler;", "connectWebSocket", "Lcom/facebook/react/devsupport/CxxInspectorPackagerConnection$IWebSocket;", "urlParam", "", "delegate", "Lcom/facebook/react/devsupport/CxxInspectorPackagerConnection$WebSocketDelegate;", "scheduleCallback", "", "runnable", "Ljava/lang/Runnable;", "delayMs", "", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class DelegateImpl {
        @NotNull
        private final OkHttpClient httpClient;
        @NotNull
        private final Handler mHandler;

        public DelegateImpl() {
            OkHttpClient.Builder builder = new OkHttpClient.Builder();
            TimeUnit timeUnit = TimeUnit.SECONDS;
            this.httpClient = builder.f(10L, timeUnit).R(10L, timeUnit).Q(0L, TimeUnit.MINUTES).c();
            this.mHandler = new Handler(Looper.getMainLooper());
        }

        @fb.a
        @NotNull
        public final IWebSocket connectWebSocket(String str, @NotNull WebSocketDelegate delegate) {
            Intrinsics.checkNotNullParameter(delegate, "delegate");
            if (str != null) {
                final WebSocket E = this.httpClient.E(new Request.Builder().l(str).b(), new CxxInspectorPackagerConnection$DelegateImpl$connectWebSocket$webSocket$1(this, delegate));
                return new IWebSocket() { // from class: com.facebook.react.devsupport.CxxInspectorPackagerConnection$DelegateImpl$connectWebSocket$1
                    @Override // com.facebook.react.devsupport.CxxInspectorPackagerConnection.IWebSocket, java.io.Closeable, java.lang.AutoCloseable
                    public void close() {
                        WebSocket.this.f(1000, "End of session");
                    }

                    @Override // com.facebook.react.devsupport.CxxInspectorPackagerConnection.IWebSocket
                    public void send(String message) {
                        Intrinsics.checkNotNullParameter(message, "message");
                        WebSocket.this.send(message);
                    }
                };
            }
            throw new IllegalArgumentException("Required value was null.");
        }

        @fb.a
        public final void scheduleCallback(@NotNull Runnable runnable, long j10) {
            Intrinsics.checkNotNullParameter(runnable, "runnable");
            this.mHandler.postDelayed(runnable, j10);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    @Metadata(d1 = {"\u0000\u0018\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0002\bc\u0018\u00002\u00020\u0001J\u0010\u0010\u0002\u001a\u00020\u00032\u0006\u0010\u0004\u001a\u00020\u0005H&J\b\u0010\u0006\u001a\u00020\u0003H&ø\u0001\u0000\u0082\u0002\u0006\n\u0004\b!0\u0001¨\u0006\u0007À\u0006\u0001"}, d2 = {"Lcom/facebook/react/devsupport/CxxInspectorPackagerConnection$IWebSocket;", "Ljava/io/Closeable;", "send", "", "message", "", "close", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface IWebSocket extends Closeable {
        @Override // java.io.Closeable, java.lang.AutoCloseable
        void close();

        void send(@NotNull String str);
    }

    /* JADX INFO: Access modifiers changed from: private */
    @Metadata(d1 = {"\u0000&\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0007\b\u0003\u0018\u00002\u00020\u0001B\u0011\b\u0007\u0012\u0006\u0010\u0002\u001a\u00020\u0003¢\u0006\u0004\b\u0004\u0010\u0005J\"\u0010\u0006\u001a\u00020\u00072\b\u0010\b\u001a\u0004\u0018\u00010\t2\b\u0010\n\u001a\u0004\u0018\u00010\u000bH\u0086 ¢\u0006\u0002\u0010\fJ\u0013\u0010\r\u001a\u00020\u00072\b\u0010\u000e\u001a\u0004\u0018\u00010\u000bH\u0086 J\t\u0010\u000f\u001a\u00020\u0007H\u0086 J\t\u0010\u0010\u001a\u00020\u0007H\u0086 J\b\u0010\u0011\u001a\u00020\u0007H\u0016R\u000e\u0010\u0002\u001a\u00020\u0003X\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006\u0012"}, d2 = {"Lcom/facebook/react/devsupport/CxxInspectorPackagerConnection$WebSocketDelegate;", "Ljava/io/Closeable;", "mHybridData", "Lcom/facebook/jni/HybridData;", "<init>", "(Lcom/facebook/jni/HybridData;)V", "didFailWithError", "", "posixCode", "", "error", "", "(Ljava/lang/Integer;Ljava/lang/String;)V", "didReceiveMessage", "message", "didOpen", "didClose", "close", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    @fb.a
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class WebSocketDelegate implements Closeable {
        @NotNull
        private final HybridData mHybridData;

        @fb.a
        public WebSocketDelegate(@NotNull HybridData mHybridData) {
            Intrinsics.checkNotNullParameter(mHybridData, "mHybridData");
            this.mHybridData = mHybridData;
        }

        @Override // java.io.Closeable, java.lang.AutoCloseable
        public void close() {
            this.mHybridData.resetNative();
        }

        public final native void didClose();

        public final native void didFailWithError(Integer num, String str);

        public final native void didOpen();

        public final native void didReceiveMessage(String str);
    }

    static {
        SoLoader.t("react_devsupportjni");
    }

    public CxxInspectorPackagerConnection(@NotNull String url, @NotNull String deviceName, @NotNull String packageName) {
        Intrinsics.checkNotNullParameter(url, "url");
        Intrinsics.checkNotNullParameter(deviceName, "deviceName");
        Intrinsics.checkNotNullParameter(packageName, "packageName");
        this.mHybridData = Companion.initHybrid(url, deviceName, packageName, new DelegateImpl());
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final native HybridData initHybrid(String str, String str2, String str3, DelegateImpl delegateImpl);

    @Override // com.facebook.react.devsupport.IInspectorPackagerConnection
    public native void closeQuietly();

    @Override // com.facebook.react.devsupport.IInspectorPackagerConnection
    public native void connect();

    @Override // com.facebook.react.devsupport.IInspectorPackagerConnection
    public native void sendEventToAllConnections(String str);
}
