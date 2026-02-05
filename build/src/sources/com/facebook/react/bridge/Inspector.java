package com.facebook.react.bridge;

import com.facebook.jni.HybridData;
import com.facebook.react.common.ReactConstants;
import com.facebook.react.devsupport.StackTraceHelper;
import java.util.List;
import kotlin.Metadata;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u00002\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0011\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0005\b\u0007\u0018\u0000 \u00132\u00020\u0001:\u0004\u0010\u0011\u0012\u0013B\u0011\b\u0002\u0012\u0006\u0010\u0002\u001a\u00020\u0003¢\u0006\u0004\b\u0004\u0010\u0005J\u0014\u0010\u0006\u001a\b\u0012\u0004\u0012\u00020\b0\u0007H\u0082 ¢\u0006\u0002\u0010\tJ\u001b\u0010\n\u001a\u0004\u0018\u00010\u000b2\u0006\u0010\f\u001a\u00020\r2\u0006\u0010\u000e\u001a\u00020\u000fH\u0082 R\u000e\u0010\u0002\u001a\u00020\u0003X\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006\u0014"}, d2 = {"Lcom/facebook/react/bridge/Inspector;", "", "mHybridData", "Lcom/facebook/jni/HybridData;", "<init>", "(Lcom/facebook/jni/HybridData;)V", "getPagesNative", "", "Lcom/facebook/react/bridge/Inspector$Page;", "()[Lcom/facebook/react/bridge/Inspector$Page;", "connectNative", "Lcom/facebook/react/bridge/Inspector$LocalConnection;", "pageId", "", "remote", "Lcom/facebook/react/bridge/Inspector$RemoteConnection;", "Page", "RemoteConnection", "LocalConnection", "Companion", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@fb.a
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class Inspector {
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    private final HybridData mHybridData;

    @Metadata(d1 = {"\u0000.\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u000e\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005H\u0007J\u0018\u0010\u0007\u001a\u00020\b2\u0006\u0010\t\u001a\u00020\n2\u0006\u0010\u000b\u001a\u00020\fH\u0007J\t\u0010\r\u001a\u00020\u000eH\u0083 ¨\u0006\u000f"}, d2 = {"Lcom/facebook/react/bridge/Inspector$Companion;", "", "<init>", "()V", "getPages", "", "Lcom/facebook/react/bridge/Inspector$Page;", "connect", "Lcom/facebook/react/bridge/Inspector$LocalConnection;", "pageId", "", "remote", "Lcom/facebook/react/bridge/Inspector$RemoteConnection;", "instance", "Lcom/facebook/react/bridge/Inspector;", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private final Inspector instance() {
            return Inspector.access$instance();
        }

        @NotNull
        public final LocalConnection connect(int i10, @NotNull RemoteConnection remote) {
            Intrinsics.checkNotNullParameter(remote, "remote");
            try {
                LocalConnection connectNative = instance().connectNative(i10, remote);
                if (connectNative != null) {
                    return connectNative;
                }
                throw new IllegalStateException("Can't open failed connection");
            } catch (UnsatisfiedLinkError e10) {
                p8.a.n(ReactConstants.TAG, "Inspector doesn't work in open source yet", e10);
                throw new RuntimeException(e10);
            }
        }

        @NotNull
        public final List<Page> getPages() {
            try {
                return kotlin.collections.i.R0(instance().getPagesNative());
            } catch (UnsatisfiedLinkError e10) {
                p8.a.n(ReactConstants.TAG, "Inspector doesn't work in open source yet", e10);
                return CollectionsKt.l();
            }
        }

        private Companion() {
        }
    }

    @Metadata(d1 = {"\u0000 \n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0002\b\u0007\u0018\u00002\u00020\u0001B\u0011\b\u0002\u0012\u0006\u0010\u0002\u001a\u00020\u0003¢\u0006\u0004\b\u0004\u0010\u0005J\u0011\u0010\u0006\u001a\u00020\u00072\u0006\u0010\b\u001a\u00020\tH\u0086 J\t\u0010\n\u001a\u00020\u0007H\u0086 R\u000e\u0010\u0002\u001a\u00020\u0003X\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006\u000b"}, d2 = {"Lcom/facebook/react/bridge/Inspector$LocalConnection;", "", "mHybridData", "Lcom/facebook/jni/HybridData;", "<init>", "(Lcom/facebook/jni/HybridData;)V", "sendMessage", "", "message", "", "disconnect", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    @fb.a
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class LocalConnection {
        @NotNull
        private final HybridData mHybridData;

        private LocalConnection(HybridData hybridData) {
            this.mHybridData = hybridData;
        }

        public final native void disconnect();

        public final native void sendMessage(@NotNull String str);
    }

    @Metadata(d1 = {"\u0000\u0018\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u000e\n\u0002\b\b\b\u0007\u0018\u00002\u00020\u0001B!\b\u0002\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\u0006\u0010\u0006\u001a\u00020\u0005¢\u0006\u0004\b\u0007\u0010\bJ\u0006\u0010\t\u001a\u00020\u0003J\u0006\u0010\n\u001a\u00020\u0005J\u0006\u0010\u000b\u001a\u00020\u0005J\b\u0010\f\u001a\u00020\u0005H\u0016R\u000e\u0010\u0002\u001a\u00020\u0003X\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\u0004\u001a\u00020\u0005X\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\u0006\u001a\u00020\u0005X\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006\r"}, d2 = {"Lcom/facebook/react/bridge/Inspector$Page;", "", StackTraceHelper.ID_KEY, "", "title", "", "vm", "<init>", "(ILjava/lang/String;Ljava/lang/String;)V", "getId", "getTitle", "getVM", "toString", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    @fb.a
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Page {

        /* renamed from: id  reason: collision with root package name */
        private final int f11022id;
        @NotNull
        private final String title;
        @NotNull

        /* renamed from: vm  reason: collision with root package name */
        private final String f11023vm;

        private Page(int i10, String str, String str2) {
            this.f11022id = i10;
            this.title = str;
            this.f11023vm = str2;
        }

        public final int getId() {
            return this.f11022id;
        }

        @NotNull
        public final String getTitle() {
            return this.title;
        }

        @NotNull
        public final String getVM() {
            return this.f11023vm;
        }

        @NotNull
        public String toString() {
            int i10 = this.f11022id;
            String str = this.title;
            return "Page{id=" + i10 + ", title='" + str + "'}";
        }
    }

    @Metadata(d1 = {"\u0000\u0018\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0002\bg\u0018\u00002\u00020\u0001J\u0010\u0010\u0002\u001a\u00020\u00032\u0006\u0010\u0004\u001a\u00020\u0005H'J\b\u0010\u0006\u001a\u00020\u0003H'ø\u0001\u0000\u0082\u0002\u0006\n\u0004\b!0\u0001¨\u0006\u0007À\u0006\u0001"}, d2 = {"Lcom/facebook/react/bridge/Inspector$RemoteConnection;", "", "onMessage", "", "message", "", "onDisconnect", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    @fb.a
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface RemoteConnection {
        @fb.a
        void onDisconnect();

        @fb.a
        void onMessage(@NotNull String str);
    }

    static {
        BridgeSoLoader.staticInit();
    }

    private Inspector(HybridData hybridData) {
        this.mHybridData = hybridData;
    }

    public static final /* synthetic */ Inspector access$instance() {
        return instance();
    }

    @NotNull
    public static final LocalConnection connect(int i10, @NotNull RemoteConnection remoteConnection) {
        return Companion.connect(i10, remoteConnection);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final native LocalConnection connectNative(int i10, RemoteConnection remoteConnection);

    @NotNull
    public static final List<Page> getPages() {
        return Companion.getPages();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final native Page[] getPagesNative();

    private static final native Inspector instance();
}
