package com.facebook.hermes.reactexecutor;

import com.facebook.jni.HybridData;
import com.facebook.jni.annotations.DoNotStrip;
import com.facebook.react.bridge.JavaScriptExecutor;
import com.facebook.react.common.build.ReactBuildConfig;
import com.facebook.soloader.SoLoader;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
@Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0007\u0018\u0000 \n2\u00020\u0001:\u0001\nB\u0019\b\u0000\u0012\u0006\u0010\u0003\u001a\u00020\u0002\u0012\u0006\u0010\u0005\u001a\u00020\u0004¢\u0006\u0004\b\u0006\u0010\u0007J\u000f\u0010\b\u001a\u00020\u0004H\u0016¢\u0006\u0004\b\b\u0010\t¨\u0006\u000b"}, d2 = {"Lcom/facebook/hermes/reactexecutor/HermesExecutor;", "Lcom/facebook/react/bridge/JavaScriptExecutor;", "", "enableDebugger", "", "debuggerName", "<init>", "(ZLjava/lang/String;)V", "getName", "()Ljava/lang/String;", "a", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class HermesExecutor extends JavaScriptExecutor {

    /* renamed from: a  reason: collision with root package name */
    public static final a f10017a;

    /* renamed from: b  reason: collision with root package name */
    private static String f10018b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        @DoNotStrip
        private final HybridData initHybrid(boolean z10, String str, long j10) {
            return HermesExecutor.initHybrid(z10, str, j10);
        }

        /* JADX INFO: Access modifiers changed from: private */
        @DoNotStrip
        public final HybridData initHybridDefaultConfig(boolean z10, String str) {
            return HermesExecutor.initHybridDefaultConfig(z10, str);
        }

        public final void b() {
            String str;
            if (HermesExecutor.f10018b == null) {
                SoLoader.t("hermes");
                SoLoader.t("hermes_executor");
                if (ReactBuildConfig.DEBUG) {
                    str = "Debug";
                } else {
                    str = "Release";
                }
                HermesExecutor.f10018b = str;
            }
        }

        private a() {
        }
    }

    static {
        a aVar = new a(null);
        f10017a = aVar;
        aVar.b();
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public HermesExecutor(boolean z10, String debuggerName) {
        super(f10017a.initHybridDefaultConfig(z10, debuggerName));
        Intrinsics.checkNotNullParameter(debuggerName, "debuggerName");
    }

    /* JADX INFO: Access modifiers changed from: private */
    @DoNotStrip
    public static final native HybridData initHybrid(boolean z10, String str, long j10);

    /* JADX INFO: Access modifiers changed from: private */
    @DoNotStrip
    public static final native HybridData initHybridDefaultConfig(boolean z10, String str);

    @Override // com.facebook.react.bridge.JavaScriptExecutor
    public String getName() {
        String str = f10018b;
        return "HermesExecutor" + str;
    }
}
