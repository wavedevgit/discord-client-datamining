package com.discord.crash_reporting;

import com.facebook.react.bridge.ReactMarker;
import com.facebook.react.bridge.ReactMarkerConstants;
import com.facebook.react.devsupport.StackTraceHelper;
import com.facebook.react.uimanager.ViewProps;
import io.sentry.ISpan;
import io.sentry.b5;
import io.sentry.e1;
import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;
import kotlin.Metadata;
import kotlin.collections.CollectionsKt;
import kotlin.collections.o0;
import kotlin.collections.x0;
import kotlin.enums.EnumEntries;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.StringsKt;
import org.jetbrains.annotations.NotNull;
import qr.v;
@Metadata(d1 = {"\u0000~\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0010\u000e\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\r\n\u0002\u0018\u0002\n\u0002\u0010\b\n\u0002\b\u0003\n\u0002\u0010%\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\t\n\u0002\b\u0004\n\u0002\u0010\u000b\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010!\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010$\n\u0000\n\u0002\u0010\"\n\u0002\b\u0006\u0018\u0000 >2\u00020\u0001:\u0003>?@B\u0007¢\u0006\u0004\b\u0002\u0010\u0003J\u000f\u0010\u0005\u001a\u00020\u0004H\u0002¢\u0006\u0004\b\u0005\u0010\u0003J\u0017\u0010\b\u001a\u00020\u00042\u0006\u0010\u0007\u001a\u00020\u0006H\u0002¢\u0006\u0004\b\b\u0010\tJ\u0017\u0010\n\u001a\u00020\u00042\u0006\u0010\u0007\u001a\u00020\u0006H\u0002¢\u0006\u0004\b\n\u0010\tJ\u0017\u0010\r\u001a\u00020\u00042\u0006\u0010\f\u001a\u00020\u000bH\u0002¢\u0006\u0004\b\r\u0010\u000eJ\u0017\u0010\u0011\u001a\u00020\u000b2\u0006\u0010\u0010\u001a\u00020\u000fH\u0002¢\u0006\u0004\b\u0011\u0010\u0012J#\u0010\u0015\u001a\u0004\u0018\u00010\u000f2\u0006\u0010\u0013\u001a\u00020\u000b2\b\u0010\u0014\u001a\u0004\u0018\u00010\u000bH\u0002¢\u0006\u0004\b\u0015\u0010\u0016J\u0019\u0010\u0017\u001a\u0004\u0018\u00010\u000b2\u0006\u0010\f\u001a\u00020\u000fH\u0002¢\u0006\u0004\b\u0017\u0010\u0012J\r\u0010\u0018\u001a\u00020\u0004¢\u0006\u0004\b\u0018\u0010\u0003J\r\u0010\u0019\u001a\u00020\u0004¢\u0006\u0004\b\u0019\u0010\u0003J\u0015\u0010\u001a\u001a\u00020\u00042\u0006\u0010\f\u001a\u00020\u000f¢\u0006\u0004\b\u001a\u0010\u001bJ\u001f\u0010\u001a\u001a\u00020\u00042\u0006\u0010\f\u001a\u00020\u000b2\b\u0010\u0014\u001a\u0004\u0018\u00010\u000b¢\u0006\u0004\b\u001a\u0010\u001cJ)\u0010 \u001a\u00020\u00042\u0006\u0010\u0013\u001a\u00020\u001d2\b\u0010\u0014\u001a\u0004\u0018\u00010\u000b2\u0006\u0010\u001f\u001a\u00020\u001eH\u0016¢\u0006\u0004\b \u0010!R \u0010$\u001a\u000e\u0012\u0004\u0012\u00020\u0006\u0012\u0004\u0012\u00020#0\"8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b$\u0010%R \u0010'\u001a\u000e\u0012\u0004\u0012\u00020\u000b\u0012\u0004\u0012\u00020&0\"8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b'\u0010%R \u0010)\u001a\u000e\u0012\u0004\u0012\u00020\u000b\u0012\u0004\u0012\u00020(0\"8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b)\u0010%R\u0018\u0010*\u001a\u0004\u0018\u00010&8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b*\u0010+R\u0018\u0010,\u001a\u0004\u0018\u00010&8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b,\u0010+R\u0016\u0010.\u001a\u00020-8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b.\u0010/R\u0018\u00101\u001a\u0004\u0018\u0001008\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b1\u00102R\u001a\u00104\u001a\b\u0012\u0004\u0012\u000200038\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b4\u00105R\u0016\u00107\u001a\u0002068\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b7\u00108R \u0010:\u001a\u000e\u0012\u0004\u0012\u00020\u000b\u0012\u0004\u0012\u00020\u000b098\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b:\u0010%R\u001a\u0010<\u001a\b\u0012\u0004\u0012\u00020\u000b0;8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b<\u0010=¨\u0006A"}, d2 = {"Lcom/discord/crash_reporting/PerformanceTracing;", "Lcom/facebook/react/bridge/ReactMarker$MarkerListener;", "<init>", "()V", "", "startNativeModuleInit", "Lcom/discord/crash_reporting/TraceTransaction;", "transaction", "startTransaction", "(Lcom/discord/crash_reporting/TraceTransaction;)V", "stopTransaction", "", "marker", "checkAndSetInitSection", "(Ljava/lang/String;)V", "Lcom/discord/crash_reporting/PerformanceTracing$TransactionMarker;", "transactionMarker", "getMarkerName", "(Lcom/discord/crash_reporting/PerformanceTracing$TransactionMarker;)Ljava/lang/String;", StackTraceHelper.NAME_KEY, "tag", "getMarker", "(Ljava/lang/String;Ljava/lang/String;)Lcom/discord/crash_reporting/PerformanceTracing$TransactionMarker;", "getParentSpanName", ViewProps.START, "stop", "logSpanForTransaction", "(Lcom/discord/crash_reporting/PerformanceTracing$TransactionMarker;)V", "(Ljava/lang/String;Ljava/lang/String;)V", "Lcom/facebook/react/bridge/ReactMarkerConstants;", "", "instanceKey", "logMarker", "(Lcom/facebook/react/bridge/ReactMarkerConstants;Ljava/lang/String;I)V", "", "Lio/sentry/e1;", "ongoingTransactions", "Ljava/util/Map;", "Lio/sentry/ISpan;", "ongoingSpans", "", "spanStarts", "lastNativeModuleSetupStart", "Lio/sentry/ISpan;", "lastProcessPackage", "", "stopped", "Z", "Lcom/discord/crash_reporting/PackageProcessTimings;", "currentProcessPackage", "Lcom/discord/crash_reporting/PackageProcessTimings;", "", "processPackageTimings", "Ljava/util/List;", "Lcom/discord/crash_reporting/StartupInitSection;", "startupInitSection", "Lcom/discord/crash_reporting/StartupInitSection;", "", "startupRootEventsTree", "", "wildcardEventNames", "Ljava/util/Set;", "Companion", "MarkerEnd", "TransactionMarker", "crash_reporting_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class PerformanceTracing implements ReactMarker.MarkerListener {
    @NotNull
    public static final Companion Companion = new Companion(null);
    private static PerformanceTracing performanceTracingInstance;
    private PackageProcessTimings currentProcessPackage;
    private ISpan lastNativeModuleSetupStart;
    private ISpan lastProcessPackage;
    @NotNull
    private final Map<TraceTransaction, e1> ongoingTransactions = new LinkedHashMap();
    @NotNull
    private final Map<String, ISpan> ongoingSpans = new LinkedHashMap();
    @NotNull
    private final Map<String, Long> spanStarts = new LinkedHashMap();
    private boolean stopped = true;
    @NotNull
    private final List<PackageProcessTimings> processPackageTimings = new ArrayList();
    @NotNull
    private StartupInitSection startupInitSection = StartupInitSection.ReactInstanceManager;
    @NotNull
    private final Map<String, String> startupRootEventsTree = o0.m(v.a("GET_REACT_INSTANCE_MANAGER", "root"), v.a("BUILD_REACT_INSTANCE_MANAGER", "GET_REACT_INSTANCE_MANAGER"), v.a("ROOT_VIEW_ON_MEASURE", "root"), v.a("ROOT_VIEW_ATTACH_TO_REACT_INSTANCE_MANAGER", "ROOT_VIEW_ON_MEASURE"), v.a("REACT_BRIDGE_LOADING", "root"), v.a("CREATE_REACT_CONTEXT", "REACT_BRIDGE_LOADING"), v.a("PROCESS_PACKAGES", "CREATE_REACT_CONTEXT"), v.a("PROCESS_CORE_REACT_PACKAGE", "PROCESS_PACKAGES"), v.a("PROCESS_PACKAGE", "PROCESS_PACKAGES"), v.a("PROCESS_PACKAGE_MODULE", "PROCESS_PACKAGE"), v.a("BUILD_NATIVE_MODULE_REGISTRY", "CREATE_REACT_CONTEXT"), v.a("CREATE_CATALYST_INSTANCE", "CREATE_REACT_CONTEXT"), v.a("LOAD_REACT_NATIVE_SO_FILE", "CREATE_CATALYST_INSTANCE"), v.a("PRE_RUN_JS_BUNDLE", "REACT_BRIDGE_LOADING"), v.a("SETUP_REACT_CONTEXT", "REACT_BRIDGE_LOADING"), v.a("ON_HOST_RESUME", "SETUP_REACT_CONTEXT"), v.a("ATTACH_MEASURED_ROOT_VIEWS", "SETUP_REACT_CONTEXT"), v.a("CREATE_MODULE UiManager", "ATTACH_MEASURED_ROOT_VIEWS"), v.a("CREATE_UI_MANAGER_MODULE", "CREATE_MODULE UiManager"), v.a("CREATE_VIEW_MANAGERS", "CREATE_UI_MANAGER_MODULE"), v.a("ROOT_VIEW_UPDATE_LAYOUT_SPECS", "SETUP_REACT_CONTEXT"), v.a("RUN_JS_BUNDLE", "root"));
    @NotNull
    private final Set<String> wildcardEventNames = x0.i("NATIVE_MODULE_SETUP", "INITIALIZE_MODULE", "CREATE_REACT_CONTEXT", "CREATE_MODULE", "RUN_JS_BUNDLE", "PROCESS_PACKAGE", "PROCESS_PACKAGE_MODULE");

    @Metadata(d1 = {"\u0000\u0014\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u0006\u0010\u0006\u001a\u00020\u0005R\u0010\u0010\u0004\u001a\u0004\u0018\u00010\u0005X\u0082\u000e¢\u0006\u0002\n\u0000¨\u0006\u0007"}, d2 = {"Lcom/discord/crash_reporting/PerformanceTracing$Companion;", "", "<init>", "()V", "performanceTracingInstance", "Lcom/discord/crash_reporting/PerformanceTracing;", "get", "crash_reporting_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        @NotNull
        public final PerformanceTracing get() {
            if (PerformanceTracing.performanceTracingInstance == null) {
                PerformanceTracing.performanceTracingInstance = new PerformanceTracing();
            }
            PerformanceTracing performanceTracing = PerformanceTracing.performanceTracingInstance;
            Intrinsics.checkNotNull(performanceTracing);
            return performanceTracing;
        }

        private Companion() {
        }
    }

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    @Metadata(d1 = {"\u0000\f\n\u0002\u0018\u0002\n\u0002\u0010\u0010\n\u0002\b\u0005\b\u0086\u0081\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00000\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003j\u0002\b\u0004j\u0002\b\u0005¨\u0006\u0006"}, d2 = {"Lcom/discord/crash_reporting/PerformanceTracing$MarkerEnd;", "", "<init>", "(Ljava/lang/String;I)V", "START", "END", "crash_reporting_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class MarkerEnd {
        private static final /* synthetic */ EnumEntries $ENTRIES;
        private static final /* synthetic */ MarkerEnd[] $VALUES;
        public static final MarkerEnd START = new MarkerEnd("START", 0);
        public static final MarkerEnd END = new MarkerEnd("END", 1);

        private static final /* synthetic */ MarkerEnd[] $values() {
            return new MarkerEnd[]{START, END};
        }

        static {
            MarkerEnd[] $values = $values();
            $VALUES = $values;
            $ENTRIES = xr.a.a($values);
        }

        private MarkerEnd(String str, int i10) {
        }

        @NotNull
        public static EnumEntries getEntries() {
            return $ENTRIES;
        }

        public static MarkerEnd valueOf(String str) {
            return (MarkerEnd) Enum.valueOf(MarkerEnd.class, str);
        }

        public static MarkerEnd[] values() {
            return (MarkerEnd[]) $VALUES.clone();
        }
    }

    @Metadata(d1 = {"\u0000*\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\f\n\u0002\u0010\u000b\n\u0002\b\u0002\n\u0002\u0010\b\n\u0002\b\u0002\b\u0086\b\u0018\u00002\u00020\u0001B!\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0003\u0012\u0006\u0010\u0005\u001a\u00020\u0006¢\u0006\u0004\b\u0007\u0010\bJ\t\u0010\u000e\u001a\u00020\u0003HÆ\u0003J\u000b\u0010\u000f\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\t\u0010\u0010\u001a\u00020\u0006HÆ\u0003J)\u0010\u0011\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\n\b\u0002\u0010\u0004\u001a\u0004\u0018\u00010\u00032\b\b\u0002\u0010\u0005\u001a\u00020\u0006HÆ\u0001J\u0013\u0010\u0012\u001a\u00020\u00132\b\u0010\u0014\u001a\u0004\u0018\u00010\u0001HÖ\u0003J\t\u0010\u0015\u001a\u00020\u0016HÖ\u0001J\t\u0010\u0017\u001a\u00020\u0003HÖ\u0001R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\t\u0010\nR\u0013\u0010\u0004\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u000b\u0010\nR\u0011\u0010\u0005\u001a\u00020\u0006¢\u0006\b\n\u0000\u001a\u0004\b\f\u0010\r¨\u0006\u0018"}, d2 = {"Lcom/discord/crash_reporting/PerformanceTracing$TransactionMarker;", "", StackTraceHelper.NAME_KEY, "", "tag", "markerEnd", "Lcom/discord/crash_reporting/PerformanceTracing$MarkerEnd;", "<init>", "(Ljava/lang/String;Ljava/lang/String;Lcom/discord/crash_reporting/PerformanceTracing$MarkerEnd;)V", "getName", "()Ljava/lang/String;", "getTag", "getMarkerEnd", "()Lcom/discord/crash_reporting/PerformanceTracing$MarkerEnd;", "component1", "component2", "component3", "copy", "equals", "", "other", "hashCode", "", "toString", "crash_reporting_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class TransactionMarker {
        @NotNull
        private final MarkerEnd markerEnd;
        @NotNull
        private final String name;
        private final String tag;

        public TransactionMarker(@NotNull String name, String str, @NotNull MarkerEnd markerEnd) {
            Intrinsics.checkNotNullParameter(name, "name");
            Intrinsics.checkNotNullParameter(markerEnd, "markerEnd");
            this.name = name;
            this.tag = str;
            this.markerEnd = markerEnd;
        }

        public static /* synthetic */ TransactionMarker copy$default(TransactionMarker transactionMarker, String str, String str2, MarkerEnd markerEnd, int i10, Object obj) {
            if ((i10 & 1) != 0) {
                str = transactionMarker.name;
            }
            if ((i10 & 2) != 0) {
                str2 = transactionMarker.tag;
            }
            if ((i10 & 4) != 0) {
                markerEnd = transactionMarker.markerEnd;
            }
            return transactionMarker.copy(str, str2, markerEnd);
        }

        @NotNull
        public final String component1() {
            return this.name;
        }

        public final String component2() {
            return this.tag;
        }

        @NotNull
        public final MarkerEnd component3() {
            return this.markerEnd;
        }

        @NotNull
        public final TransactionMarker copy(@NotNull String name, String str, @NotNull MarkerEnd markerEnd) {
            Intrinsics.checkNotNullParameter(name, "name");
            Intrinsics.checkNotNullParameter(markerEnd, "markerEnd");
            return new TransactionMarker(name, str, markerEnd);
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof TransactionMarker) {
                TransactionMarker transactionMarker = (TransactionMarker) obj;
                return Intrinsics.areEqual(this.name, transactionMarker.name) && Intrinsics.areEqual(this.tag, transactionMarker.tag) && this.markerEnd == transactionMarker.markerEnd;
            }
            return false;
        }

        @NotNull
        public final MarkerEnd getMarkerEnd() {
            return this.markerEnd;
        }

        @NotNull
        public final String getName() {
            return this.name;
        }

        public final String getTag() {
            return this.tag;
        }

        public int hashCode() {
            int hashCode = this.name.hashCode() * 31;
            String str = this.tag;
            return ((hashCode + (str == null ? 0 : str.hashCode())) * 31) + this.markerEnd.hashCode();
        }

        @NotNull
        public String toString() {
            String str = this.name;
            String str2 = this.tag;
            MarkerEnd markerEnd = this.markerEnd;
            return "TransactionMarker(name=" + str + ", tag=" + str2 + ", markerEnd=" + markerEnd + ")";
        }
    }

    /* JADX WARN: Can't fix incorrect switch cases order, some code will duplicate */
    private final void checkAndSetInitSection(String str) {
        StartupInitSection startupInitSection;
        switch (str.hashCode()) {
            case -1149178597:
                if (str.equals("NATIVE_MODULE_INITIALIZE")) {
                    startupInitSection = StartupInitSection.NativeModuleInitialization;
                    break;
                }
                startupInitSection = null;
                break;
            case -464136890:
                if (str.equals("REACT_BRIDGE_LOADING")) {
                    startupInitSection = StartupInitSection.ReactBridgeLoading;
                    break;
                }
                startupInitSection = null;
                break;
            case 291013106:
                if (str.equals("NATIVE_MODULE_SETUP")) {
                    startupInitSection = StartupInitSection.NativeModuleSetup;
                    break;
                }
                startupInitSection = null;
                break;
            case 1036876780:
                if (str.equals("GET_REACT_INSTANCE_MANAGER")) {
                    startupInitSection = StartupInitSection.ReactInstanceManager;
                    break;
                }
                startupInitSection = null;
                break;
            default:
                startupInitSection = null;
                break;
        }
        if (startupInitSection != null) {
            this.startupInitSection = startupInitSection;
        }
    }

    private final TransactionMarker getMarker(String str, String str2) {
        if (StringsKt.z(str, "_START", false, 2, null)) {
            return new TransactionMarker(StringsKt.D0(str, "_START"), str2, MarkerEnd.START);
        }
        if (!StringsKt.z(str, "_END", false, 2, null)) {
            return null;
        }
        return new TransactionMarker(StringsKt.D0(str, "_END"), str2, MarkerEnd.END);
    }

    private final String getMarkerName(TransactionMarker transactionMarker) {
        if (transactionMarker.getTag() != null && !Intrinsics.areEqual(transactionMarker.getName(), "CREATE_REACT_CONTEXT")) {
            String name = transactionMarker.getName();
            String tag = transactionMarker.getTag();
            return name + " " + tag;
        }
        return transactionMarker.getName();
    }

    private final String getParentSpanName(TransactionMarker transactionMarker) {
        String str = this.startupRootEventsTree.get(getMarkerName(transactionMarker));
        if (str != null) {
            return str;
        }
        if (this.wildcardEventNames.contains(transactionMarker.getName())) {
            String str2 = this.startupRootEventsTree.get(transactionMarker.getName());
            if (CollectionsKt.d0(this.wildcardEventNames, str2)) {
                MarkerEnd markerEnd = transactionMarker.getMarkerEnd();
                return str2 + " " + markerEnd;
            }
            return str2;
        }
        return null;
    }

    private final void startNativeModuleInit() {
        startTransaction(TraceTransaction.NativeModuleInit);
    }

    private final void startTransaction(TraceTransaction traceTransaction) {
        if (this.ongoingTransactions.containsKey(traceTransaction)) {
            return;
        }
        e1 S = b5.S(traceTransaction.getTransactionName(), traceTransaction.getOperation());
        Intrinsics.checkNotNullExpressionValue(S, "startTransaction(...)");
        this.ongoingTransactions.put(traceTransaction, S);
        this.ongoingSpans.put("root", S);
        this.spanStarts.put("root", Long.valueOf(System.currentTimeMillis()));
    }

    private final void stopTransaction(TraceTransaction traceTransaction) {
        e1 e1Var = this.ongoingTransactions.get(traceTransaction);
        if (e1Var != null) {
            e1Var.d();
        }
        this.ongoingTransactions.remove(traceTransaction);
    }

    @Override // com.facebook.react.bridge.ReactMarker.MarkerListener
    public void logMarker(@NotNull ReactMarkerConstants name, String str, int i10) {
        Intrinsics.checkNotNullParameter(name, "name");
        String name2 = name.name();
        logSpanForTransaction(name2, str);
        if (Intrinsics.areEqual(name2, "CONTENT_APPEARED")) {
            stop();
        }
    }

    public final synchronized void logSpanForTransaction(@NotNull TransactionMarker marker) {
        ISpan iSpan;
        PackageProcessTimings packageProcessTimings;
        List<String> modules;
        ISpan iSpan2;
        ISpan iSpan3;
        try {
            Intrinsics.checkNotNullParameter(marker, "marker");
            checkAndSetInitSection(marker.getName());
            String markerName = getMarkerName(marker);
            String parentSpanName = getParentSpanName(marker);
            if (marker.getMarkerEnd() == MarkerEnd.START) {
                if (this.startupInitSection == StartupInitSection.NativeModuleSetup && Intrinsics.areEqual(marker.getName(), "NATIVE_MODULE_SETUP") && (iSpan3 = this.lastNativeModuleSetupStart) != null) {
                    if (iSpan3 != null) {
                        iSpan3.d();
                    }
                    this.lastNativeModuleSetupStart = null;
                }
                if (Intrinsics.areEqual(marker.getName(), "RUN_JS_BUNDLE") && (iSpan2 = this.ongoingSpans.get("PRE_RUN_JS_BUNDLE")) != null) {
                    iSpan2.d();
                }
                if (Intrinsics.areEqual(marker.getName(), "PROCESS_PACKAGE_MODULE")) {
                    iSpan = this.lastProcessPackage;
                } else {
                    iSpan = this.ongoingSpans.get(parentSpanName);
                }
                if (iSpan == null && parentSpanName != null && StringsKt.z(parentSpanName, "~", false, 2, null)) {
                    ISpan iSpan4 = this.ongoingSpans.get(this.startupRootEventsTree.get(parentSpanName));
                    if (iSpan4 != null && (iSpan = iSpan4.g(markerName)) != null) {
                        this.ongoingSpans.put(parentSpanName, iSpan);
                        this.spanStarts.put(parentSpanName, Long.valueOf(System.currentTimeMillis()));
                    }
                    return;
                }
                if (iSpan == null) {
                    return;
                }
                ISpan g10 = iSpan.g(markerName);
                Intrinsics.checkNotNullExpressionValue(g10, "startChild(...)");
                this.ongoingSpans.put(markerName, g10);
                this.spanStarts.put(markerName, Long.valueOf(System.currentTimeMillis()));
                if (Intrinsics.areEqual(marker.getName(), "PROCESS_PACKAGE")) {
                    this.lastProcessPackage = g10;
                    PackageProcessTimings packageProcessTimings2 = new PackageProcessTimings();
                    this.currentProcessPackage = packageProcessTimings2;
                    this.processPackageTimings.add(packageProcessTimings2);
                }
                if (Intrinsics.areEqual(marker.getName(), "PROCESS_PACKAGE_MODULE") && (packageProcessTimings = this.currentProcessPackage) != null && (modules = packageProcessTimings.getModules()) != null) {
                    String tag = marker.getTag();
                    if (tag == null) {
                        tag = "";
                    }
                    modules.add(tag);
                }
            } else {
                ISpan iSpan5 = this.ongoingSpans.get(markerName);
                if (iSpan5 != null) {
                    iSpan5.d();
                    this.ongoingSpans.remove(markerName);
                    if (Intrinsics.areEqual(marker.getName(), "PROCESS_PACKAGE")) {
                        PackageProcessTimings packageProcessTimings3 = this.currentProcessPackage;
                        if (packageProcessTimings3 != null) {
                            packageProcessTimings3.setEndTime(System.currentTimeMillis());
                        }
                        this.currentProcessPackage = null;
                    }
                }
            }
        } finally {
        }
    }

    public final void start() {
        if (this.stopped) {
            ReactMarker.addListener(this);
            startNativeModuleInit();
            this.stopped = false;
        }
    }

    public final void stop() {
        if (!this.stopped) {
            stopTransaction(TraceTransaction.NativeModuleInit);
            ReactMarker.removeListener(this);
            this.stopped = true;
        }
    }

    public final synchronized void logSpanForTransaction(@NotNull String marker, String str) {
        Intrinsics.checkNotNullParameter(marker, "marker");
        TransactionMarker marker2 = getMarker(marker, str);
        if (marker2 == null) {
            return;
        }
        logSpanForTransaction(marker2);
    }
}
