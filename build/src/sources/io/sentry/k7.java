package io.sentry;

import io.sentry.r6;
import io.sentry.util.r;
import java.io.File;
import java.net.Proxy;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.CopyOnWriteArrayList;
import java.util.concurrent.CopyOnWriteArraySet;
import javax.net.ssl.SSLSocketFactory;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class k7 {
    static final SentryLevel DEFAULT_DIAGNOSTIC_LEVEL = SentryLevel.DEBUG;
    private static final String DEFAULT_ENVIRONMENT = "production";
    @NotNull
    public static final String DEFAULT_PROPAGATION_TARGETS = ".*";
    private boolean attachServerName;
    private boolean attachStacktrace;
    private boolean attachThreads;
    @NotNull
    private io.sentry.backpressure.b backpressureMonitor;
    private a beforeBreadcrumb;
    private b beforeEnvelopeCallback;
    private c beforeSend;
    private c beforeSendFeedback;
    private d beforeSendReplay;
    private e beforeSendTransaction;
    @NotNull
    private final Set<String> bundleIds;
    private String cacheDirPath;
    private boolean captureOpenTelemetryEvents;
    @NotNull
    io.sentry.clientreport.h clientReportRecorder;
    @NotNull
    private io.sentry.h compositePerformanceCollector;
    @NotNull
    private k0 connectionStatusProvider;
    private int connectionTimeoutMillis;
    @NotNull
    private final List<String> contextTags;
    @NotNull
    private l0 continuousProfiler;
    private f cron;
    @NotNull
    private final io.sentry.util.r dateProvider;
    private long deadlineTimeout;
    private boolean debug;
    @NotNull
    private io.sentry.internal.debugmeta.a debugMetaLoader;
    @NotNull
    private d4 defaultScopeType;
    @NotNull
    private final List<String> defaultTracePropagationTargets;
    @NotNull
    private SentryLevel diagnosticLevel;
    private String dist;
    private String distinctId;
    @NotNull
    private g distribution;
    @NotNull
    private m0 distributionController;
    private String dsn;
    private String dsnHash;
    private boolean enableAppStartProfiling;
    private boolean enableAutoSessionTracking;
    private boolean enableBackpressureHandling;
    private boolean enableDeduplication;
    private boolean enableEventSizeLimiting;
    private boolean enableExternalConfiguration;
    private boolean enablePrettySerializationOutput;
    private boolean enableScopePersistence;
    private boolean enableScreenTracking;
    private boolean enableShutdownHook;
    private boolean enableSpotlight;
    private boolean enableTimeToFullDisplayTracing;
    private boolean enableUncaughtExceptionHandler;
    private boolean enableUserInteractionBreadcrumbs;
    private boolean enableUserInteractionTracing;
    private boolean enabled;
    @NotNull
    private io.sentry.cache.g envelopeDiskCache;
    @NotNull
    private final io.sentry.util.r envelopeReader;
    private String environment;
    @NotNull
    private final List<b0> eventProcessors;
    @NotNull
    private z0 executorService;
    @NotNull
    private final c0 experimental;
    @NotNull
    private ILogger fatalLogger;
    @NotNull
    private r6 feedbackOptions;
    private long flushTimeoutMillis;
    private boolean forceInit;
    @NotNull
    private f0 fullyDisplayedReporter;
    @NotNull
    private final List<io.sentry.internal.gestures.a> gestureTargetLocators;
    private Boolean globalHubMode;
    private Long idleTimeout;
    private List<e0> ignoredCheckIns;
    private List<e0> ignoredErrors;
    @NotNull
    private final Set<Class<? extends Throwable>> ignoredExceptionsForType;
    private List<e0> ignoredSpanOrigins;
    private List<e0> ignoredTransactions;
    @NotNull
    private final List<String> inAppExcludes;
    @NotNull
    private final List<String> inAppIncludes;
    @NotNull
    private i1 initPriority;
    @NotNull
    private j1 instrumenter;
    @NotNull
    private final List<k1> integrations;
    private volatile r8 internalTracesSampler;
    @NotNull
    protected final io.sentry.util.a lock;
    @NotNull
    private ILogger logger;
    @NotNull
    private h logs;
    private long maxAttachmentSize;
    private int maxBreadcrumbs;
    private int maxCacheItems;
    private int maxDepth;
    private int maxFeatureFlags;
    private int maxQueueSize;
    @NotNull
    private m maxRequestBodySize;
    private int maxSpans;
    private long maxTraceFileSize;
    @NotNull
    private io.sentry.internal.modules.b modulesLoader;
    @NotNull
    private final List<v0> observers;
    private i onDiscard;
    private j onOversizedEvent;
    @NotNull
    private e7 openTelemetryMode;
    @NotNull
    private final List<q0> optionsObservers;
    @NotNull
    private final io.sentry.util.r parsedDsn;
    @NotNull
    private final List<r0> performanceCollectors;
    private boolean printUncaughtStackTrace;
    @NotNull
    private o3 profileLifecycle;
    private Double profileSessionSampleRate;
    @NotNull
    private u0 profilerConverter;
    private Double profilesSampleRate;
    private k profilesSampler;
    private String profilingTracesDirPath;
    private int profilingTracesHz;
    private String proguardUuid;
    private boolean propagateTraceparent;
    private l proxy;
    private int readTimeoutMillis;
    private String release;
    @NotNull
    private u3 replayController;
    @NotNull
    private io.sentry.util.runtime.a runtimeManager;
    private Double sampleRate;
    private io.sentry.protocol.r sdkVersion;
    private boolean sendClientReports;
    private boolean sendDefaultPii;
    private boolean sendModules;
    private String sentryClientName;
    @NotNull
    private final io.sentry.util.r serializer;
    private String serverName;
    private long sessionFlushTimeoutMillis;
    @NotNull
    private m7 sessionReplay;
    private long sessionTrackingIntervalMillis;
    private long shutdownTimeoutMillis;
    @NotNull
    private c1 socketTagger;
    @NotNull
    private d1 spanFactory;
    private String spotlightConnectionUrl;
    private SSLSocketFactory sslSocketFactory;
    private boolean startProfilerOnAppStart;
    @NotNull
    private final Map<String, String> tags;
    @NotNull
    private io.sentry.util.thread.a threadChecker;
    private boolean traceOptionsRequests;
    private List<String> tracePropagationTargets;
    private boolean traceSampling;
    private Double tracesSampleRate;
    private n tracesSampler;
    @NotNull
    private f1 transactionProfiler;
    @NotNull
    private g1 transportFactory;
    @NotNull
    private io.sentry.transport.r transportGate;
    @NotNull
    private h1 versionDetector;
    @NotNull
    private final List<Object> viewHierarchyExporters;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface a {
        Breadcrumb a(Breadcrumb breadcrumb, Hint hint);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface b {
        void a(l5 l5Var, Hint hint);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface c {
        SentryEvent a(SentryEvent sentryEvent, Hint hint);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface d {
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface e {
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class f {

        /* renamed from: a  reason: collision with root package name */
        private Long f29685a;

        /* renamed from: b  reason: collision with root package name */
        private Long f29686b;

        /* renamed from: c  reason: collision with root package name */
        private String f29687c;

        /* renamed from: d  reason: collision with root package name */
        private Long f29688d;

        /* renamed from: e  reason: collision with root package name */
        private Long f29689e;

        public Long a() {
            return this.f29685a;
        }

        public Long b() {
            return this.f29688d;
        }

        public Long c() {
            return this.f29686b;
        }

        public Long d() {
            return this.f29689e;
        }

        public String e() {
            return this.f29687c;
        }

        public void f(Long l10) {
            this.f29685a = l10;
        }

        public void g(Long l10) {
            this.f29688d = l10;
        }

        public void h(Long l10) {
            this.f29686b = l10;
        }

        public void i(Long l10) {
            this.f29689e = l10;
        }

        public void j(String str) {
            this.f29687c = str;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class g {

        /* renamed from: a  reason: collision with root package name */
        public String f29690a = "";

        /* renamed from: b  reason: collision with root package name */
        public String f29691b = "";

        /* renamed from: c  reason: collision with root package name */
        public String f29692c = "";

        /* renamed from: d  reason: collision with root package name */
        public String f29693d = "https://sentry.io";

        /* renamed from: e  reason: collision with root package name */
        public String f29694e = null;
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class h {

        /* renamed from: a  reason: collision with root package name */
        private boolean f29695a = false;

        public boolean a() {
            return this.f29695a;
        }

        public void b(boolean z10) {
            this.f29695a = z10;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface i {
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface j {
        SentryEvent a(SentryEvent sentryEvent, Hint hint);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface k {
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class l {

        /* renamed from: a  reason: collision with root package name */
        private String f29696a;

        /* renamed from: b  reason: collision with root package name */
        private String f29697b;

        /* renamed from: c  reason: collision with root package name */
        private String f29698c;

        /* renamed from: d  reason: collision with root package name */
        private String f29699d;

        /* renamed from: e  reason: collision with root package name */
        private Proxy.Type f29700e;

        public l(String str, String str2, String str3, String str4) {
            this(str, str2, null, str3, str4);
        }

        public String a() {
            return this.f29696a;
        }

        public String b() {
            return this.f29699d;
        }

        public String c() {
            return this.f29697b;
        }

        public Proxy.Type d() {
            return this.f29700e;
        }

        public String e() {
            return this.f29698c;
        }

        public l(String str, String str2, Proxy.Type type, String str3, String str4) {
            this.f29696a = str;
            this.f29697b = str2;
            this.f29700e = type;
            this.f29698c = str3;
            this.f29699d = str4;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public enum m {
        NONE,
        SMALL,
        MEDIUM,
        ALWAYS
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface n {
    }

    public k7() {
        this(false);
    }

    public static /* synthetic */ k5 a() {
        return new d5();
    }

    public static /* synthetic */ u b(k7 k7Var) {
        return new u(k7Var.dsn);
    }

    public static /* synthetic */ n0 c(k7 k7Var) {
        k7Var.getClass();
        return new w((b1) k7Var.serializer.a());
    }

    private io.sentry.protocol.r createSdkVersion() {
        io.sentry.protocol.r rVar = new io.sentry.protocol.r("sentry.java", "8.27.0");
        rVar.k("8.27.0");
        return rVar;
    }

    public static /* synthetic */ b1 d(k7 k7Var) {
        k7Var.getClass();
        return new x1(k7Var);
    }

    private void e() {
        u6.d().b("maven:io.sentry:sentry", "8.27.0");
    }

    @NotNull
    public static k7 empty() {
        return new k7(true);
    }

    public void addBundleId(String str) {
        if (str != null) {
            String trim = str.trim();
            if (!trim.isEmpty()) {
                this.bundleIds.add(trim);
            }
        }
    }

    public void addContextTag(@NotNull String str) {
        this.contextTags.add(str);
    }

    public void addEventProcessor(@NotNull b0 b0Var) {
        this.eventProcessors.add(b0Var);
    }

    public void addIgnoredCheckIn(String str) {
        if (this.ignoredCheckIns == null) {
            this.ignoredCheckIns = new ArrayList();
        }
        this.ignoredCheckIns.add(new e0(str));
    }

    public void addIgnoredError(@NotNull String str) {
        if (this.ignoredErrors == null) {
            this.ignoredErrors = new ArrayList();
        }
        this.ignoredErrors.add(new e0(str));
    }

    public void addIgnoredExceptionForType(@NotNull Class<? extends Throwable> cls) {
        this.ignoredExceptionsForType.add(cls);
    }

    public void addIgnoredSpanOrigin(String str) {
        if (this.ignoredSpanOrigins == null) {
            this.ignoredSpanOrigins = new ArrayList();
        }
        this.ignoredSpanOrigins.add(new e0(str));
    }

    public void addIgnoredTransaction(String str) {
        if (this.ignoredTransactions == null) {
            this.ignoredTransactions = new ArrayList();
        }
        this.ignoredTransactions.add(new e0(str));
    }

    public void addInAppExclude(@NotNull String str) {
        this.inAppExcludes.add(str);
    }

    public void addInAppInclude(@NotNull String str) {
        this.inAppIncludes.add(str);
    }

    public void addIntegration(@NotNull k1 k1Var) {
        this.integrations.add(k1Var);
    }

    public void addOptionsObserver(@NotNull q0 q0Var) {
        this.optionsObservers.add(q0Var);
    }

    public void addPerformanceCollector(@NotNull r0 r0Var) {
        this.performanceCollectors.add(r0Var);
    }

    public void addScopeObserver(@NotNull v0 v0Var) {
        this.observers.add(v0Var);
    }

    boolean containsIgnoredExceptionForType(@NotNull Throwable th2) {
        return this.ignoredExceptionsForType.contains(th2.getClass());
    }

    public io.sentry.cache.u findPersistingScopeObserver() {
        for (v0 v0Var : this.observers) {
            if (v0Var instanceof io.sentry.cache.u) {
                return (io.sentry.cache.u) v0Var;
            }
        }
        return null;
    }

    @NotNull
    public io.sentry.backpressure.b getBackpressureMonitor() {
        return this.backpressureMonitor;
    }

    public a getBeforeBreadcrumb() {
        return this.beforeBreadcrumb;
    }

    public b getBeforeEnvelopeCallback() {
        return this.beforeEnvelopeCallback;
    }

    public c getBeforeSend() {
        return this.beforeSend;
    }

    public c getBeforeSendFeedback() {
        return this.beforeSendFeedback;
    }

    public d getBeforeSendReplay() {
        return null;
    }

    public e getBeforeSendTransaction() {
        return null;
    }

    @NotNull
    public Set<String> getBundleIds() {
        return this.bundleIds;
    }

    public String getCacheDirPath() {
        String str = this.cacheDirPath;
        if (str != null && !str.isEmpty()) {
            if (this.dsnHash != null) {
                return new File(this.cacheDirPath, this.dsnHash).getAbsolutePath();
            }
            return this.cacheDirPath;
        }
        return null;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public String getCacheDirPathWithoutDsn() {
        String str = this.cacheDirPath;
        if (str != null && !str.isEmpty()) {
            return this.cacheDirPath;
        }
        return null;
    }

    @NotNull
    public io.sentry.clientreport.h getClientReportRecorder() {
        return this.clientReportRecorder;
    }

    @NotNull
    public io.sentry.h getCompositePerformanceCollector() {
        return this.compositePerformanceCollector;
    }

    @NotNull
    public k0 getConnectionStatusProvider() {
        return this.connectionStatusProvider;
    }

    public int getConnectionTimeoutMillis() {
        return this.connectionTimeoutMillis;
    }

    @NotNull
    public List<String> getContextTags() {
        return this.contextTags;
    }

    @NotNull
    public l0 getContinuousProfiler() {
        return this.continuousProfiler;
    }

    public f getCron() {
        return this.cron;
    }

    @NotNull
    public k5 getDateProvider() {
        return (k5) this.dateProvider.a();
    }

    public long getDeadlineTimeout() {
        return this.deadlineTimeout;
    }

    @NotNull
    public io.sentry.internal.debugmeta.a getDebugMetaLoader() {
        return this.debugMetaLoader;
    }

    @NotNull
    public d4 getDefaultScopeType() {
        return this.defaultScopeType;
    }

    @NotNull
    public SentryLevel getDiagnosticLevel() {
        return this.diagnosticLevel;
    }

    public String getDist() {
        return this.dist;
    }

    public String getDistinctId() {
        return this.distinctId;
    }

    @NotNull
    public g getDistribution() {
        return this.distribution;
    }

    @NotNull
    public m0 getDistributionController() {
        return this.distributionController;
    }

    public String getDsn() {
        return this.dsn;
    }

    @NotNull
    public io.sentry.cache.g getEnvelopeDiskCache() {
        return this.envelopeDiskCache;
    }

    @NotNull
    public n0 getEnvelopeReader() {
        return (n0) this.envelopeReader.a();
    }

    public String getEnvironment() {
        String str = this.environment;
        if (str != null) {
            return str;
        }
        return DEFAULT_ENVIRONMENT;
    }

    @NotNull
    public List<b0> getEventProcessors() {
        return this.eventProcessors;
    }

    @NotNull
    public z0 getExecutorService() {
        return this.executorService;
    }

    @NotNull
    public c0 getExperimental() {
        return this.experimental;
    }

    @NotNull
    public ILogger getFatalLogger() {
        return this.fatalLogger;
    }

    @NotNull
    public r6 getFeedbackOptions() {
        return this.feedbackOptions;
    }

    public long getFlushTimeoutMillis() {
        return this.flushTimeoutMillis;
    }

    @NotNull
    public f0 getFullyDisplayedReporter() {
        return this.fullyDisplayedReporter;
    }

    public List<io.sentry.internal.gestures.a> getGestureTargetLocators() {
        return this.gestureTargetLocators;
    }

    public Long getIdleTimeout() {
        return this.idleTimeout;
    }

    public List<e0> getIgnoredCheckIns() {
        return this.ignoredCheckIns;
    }

    public List<e0> getIgnoredErrors() {
        return this.ignoredErrors;
    }

    @NotNull
    public Set<Class<? extends Throwable>> getIgnoredExceptionsForType() {
        return this.ignoredExceptionsForType;
    }

    public List<e0> getIgnoredSpanOrigins() {
        return this.ignoredSpanOrigins;
    }

    public List<e0> getIgnoredTransactions() {
        return this.ignoredTransactions;
    }

    @NotNull
    public List<String> getInAppExcludes() {
        return this.inAppExcludes;
    }

    @NotNull
    public List<String> getInAppIncludes() {
        return this.inAppIncludes;
    }

    @NotNull
    public i1 getInitPriority() {
        return this.initPriority;
    }

    @NotNull
    public j1 getInstrumenter() {
        return this.instrumenter;
    }

    @NotNull
    public List<k1> getIntegrations() {
        return this.integrations;
    }

    @NotNull
    public r8 getInternalTracesSampler() {
        if (this.internalTracesSampler == null) {
            a1 a10 = this.lock.a();
            try {
                if (this.internalTracesSampler == null) {
                    this.internalTracesSampler = new r8(this);
                }
                if (a10 != null) {
                    a10.close();
                }
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
        return this.internalTracesSampler;
    }

    @NotNull
    public ILogger getLogger() {
        return this.logger;
    }

    @NotNull
    public h getLogs() {
        return this.logs;
    }

    public long getMaxAttachmentSize() {
        return this.maxAttachmentSize;
    }

    public int getMaxBreadcrumbs() {
        return this.maxBreadcrumbs;
    }

    public int getMaxCacheItems() {
        return this.maxCacheItems;
    }

    public int getMaxDepth() {
        return this.maxDepth;
    }

    public int getMaxFeatureFlags() {
        return this.maxFeatureFlags;
    }

    public int getMaxQueueSize() {
        return this.maxQueueSize;
    }

    @NotNull
    public m getMaxRequestBodySize() {
        return this.maxRequestBodySize;
    }

    public int getMaxSpans() {
        return this.maxSpans;
    }

    public long getMaxTraceFileSize() {
        return this.maxTraceFileSize;
    }

    @NotNull
    public io.sentry.internal.modules.b getModulesLoader() {
        return this.modulesLoader;
    }

    public i getOnDiscard() {
        return null;
    }

    public j getOnOversizedEvent() {
        return this.onOversizedEvent;
    }

    @NotNull
    public e7 getOpenTelemetryMode() {
        return this.openTelemetryMode;
    }

    @NotNull
    public List<q0> getOptionsObservers() {
        return this.optionsObservers;
    }

    public String getOutboxPath() {
        String cacheDirPath = getCacheDirPath();
        if (cacheDirPath == null) {
            return null;
        }
        return new File(cacheDirPath, "outbox").getAbsolutePath();
    }

    @NotNull
    public List<r0> getPerformanceCollectors() {
        return this.performanceCollectors;
    }

    @NotNull
    public o3 getProfileLifecycle() {
        return this.profileLifecycle;
    }

    public Double getProfileSessionSampleRate() {
        return this.profileSessionSampleRate;
    }

    @NotNull
    public u0 getProfilerConverter() {
        return this.profilerConverter;
    }

    public Double getProfilesSampleRate() {
        return this.profilesSampleRate;
    }

    public k getProfilesSampler() {
        return null;
    }

    public String getProfilingTracesDirPath() {
        String str = this.profilingTracesDirPath;
        if (str != null && !str.isEmpty()) {
            if (this.dsnHash != null) {
                return new File(this.profilingTracesDirPath, this.dsnHash).getAbsolutePath();
            }
            return this.profilingTracesDirPath;
        }
        String cacheDirPath = getCacheDirPath();
        if (cacheDirPath == null) {
            return null;
        }
        return new File(cacheDirPath, "profiling_traces").getAbsolutePath();
    }

    public int getProfilingTracesHz() {
        return this.profilingTracesHz;
    }

    public String getProguardUuid() {
        return this.proguardUuid;
    }

    public l getProxy() {
        return this.proxy;
    }

    public int getReadTimeoutMillis() {
        return this.readTimeoutMillis;
    }

    public String getRelease() {
        return this.release;
    }

    @NotNull
    public u3 getReplayController() {
        return this.replayController;
    }

    @NotNull
    public io.sentry.util.runtime.a getRuntimeManager() {
        return this.runtimeManager;
    }

    public Double getSampleRate() {
        return this.sampleRate;
    }

    @NotNull
    public List<v0> getScopeObservers() {
        return this.observers;
    }

    public io.sentry.protocol.r getSdkVersion() {
        return this.sdkVersion;
    }

    public String getSentryClientName() {
        return this.sentryClientName;
    }

    @NotNull
    public b1 getSerializer() {
        return (b1) this.serializer.a();
    }

    public String getServerName() {
        return this.serverName;
    }

    public long getSessionFlushTimeoutMillis() {
        return this.sessionFlushTimeoutMillis;
    }

    @NotNull
    public m7 getSessionReplay() {
        return this.sessionReplay;
    }

    public long getSessionTrackingIntervalMillis() {
        return this.sessionTrackingIntervalMillis;
    }

    public long getShutdownTimeoutMillis() {
        return this.shutdownTimeoutMillis;
    }

    @NotNull
    public c1 getSocketTagger() {
        return this.socketTagger;
    }

    @NotNull
    public d1 getSpanFactory() {
        return this.spanFactory;
    }

    public String getSpotlightConnectionUrl() {
        return this.spotlightConnectionUrl;
    }

    public SSLSocketFactory getSslSocketFactory() {
        return this.sslSocketFactory;
    }

    @NotNull
    public Map<String, String> getTags() {
        return this.tags;
    }

    @NotNull
    public io.sentry.util.thread.a getThreadChecker() {
        return this.threadChecker;
    }

    @NotNull
    public List<String> getTracePropagationTargets() {
        List<String> list = this.tracePropagationTargets;
        if (list == null) {
            return this.defaultTracePropagationTargets;
        }
        return list;
    }

    public Double getTracesSampleRate() {
        return this.tracesSampleRate;
    }

    public n getTracesSampler() {
        return null;
    }

    @NotNull
    public f1 getTransactionProfiler() {
        return this.transactionProfiler;
    }

    @NotNull
    public g1 getTransportFactory() {
        return this.transportFactory;
    }

    @NotNull
    public io.sentry.transport.r getTransportGate() {
        return this.transportGate;
    }

    @NotNull
    public h1 getVersionDetector() {
        return this.versionDetector;
    }

    @NotNull
    public final List<Object> getViewHierarchyExporters() {
        return this.viewHierarchyExporters;
    }

    public boolean isAttachServerName() {
        return this.attachServerName;
    }

    public boolean isAttachStacktrace() {
        return this.attachStacktrace;
    }

    public boolean isAttachThreads() {
        return this.attachThreads;
    }

    public boolean isCaptureOpenTelemetryEvents() {
        return this.captureOpenTelemetryEvents;
    }

    public boolean isContinuousProfilingEnabled() {
        Double d10;
        if (this.profilesSampleRate == null && (d10 = this.profileSessionSampleRate) != null && d10.doubleValue() > 0.0d) {
            return true;
        }
        return false;
    }

    public boolean isDebug() {
        return this.debug;
    }

    public boolean isEnableAppStartProfiling() {
        if ((isProfilingEnabled() || isContinuousProfilingEnabled()) && this.enableAppStartProfiling) {
            return true;
        }
        return false;
    }

    public boolean isEnableAutoSessionTracking() {
        return this.enableAutoSessionTracking;
    }

    public boolean isEnableBackpressureHandling() {
        return this.enableBackpressureHandling;
    }

    public boolean isEnableDeduplication() {
        return this.enableDeduplication;
    }

    public boolean isEnableEventSizeLimiting() {
        return this.enableEventSizeLimiting;
    }

    public boolean isEnableExternalConfiguration() {
        return this.enableExternalConfiguration;
    }

    public boolean isEnablePrettySerializationOutput() {
        return this.enablePrettySerializationOutput;
    }

    public boolean isEnableScopePersistence() {
        return this.enableScopePersistence;
    }

    public boolean isEnableScreenTracking() {
        return this.enableScreenTracking;
    }

    public boolean isEnableShutdownHook() {
        return this.enableShutdownHook;
    }

    public boolean isEnableSpotlight() {
        return this.enableSpotlight;
    }

    public boolean isEnableTimeToFullDisplayTracing() {
        return this.enableTimeToFullDisplayTracing;
    }

    public boolean isEnableUncaughtExceptionHandler() {
        return this.enableUncaughtExceptionHandler;
    }

    public boolean isEnableUserInteractionBreadcrumbs() {
        return this.enableUserInteractionBreadcrumbs;
    }

    public boolean isEnableUserInteractionTracing() {
        return this.enableUserInteractionTracing;
    }

    public boolean isEnabled() {
        return this.enabled;
    }

    public boolean isForceInit() {
        return this.forceInit;
    }

    public Boolean isGlobalHubMode() {
        return this.globalHubMode;
    }

    public boolean isPrintUncaughtStackTrace() {
        return this.printUncaughtStackTrace;
    }

    public boolean isProfilingEnabled() {
        Double d10 = this.profilesSampleRate;
        if (d10 != null && d10.doubleValue() > 0.0d) {
            return true;
        }
        return false;
    }

    public boolean isPropagateTraceparent() {
        return this.propagateTraceparent;
    }

    public boolean isSendClientReports() {
        return this.sendClientReports;
    }

    public boolean isSendDefaultPii() {
        return this.sendDefaultPii;
    }

    public boolean isSendModules() {
        return this.sendModules;
    }

    public boolean isStartProfilerOnAppStart() {
        return this.startProfilerOnAppStart;
    }

    public boolean isTraceOptionsRequests() {
        return this.traceOptionsRequests;
    }

    public boolean isTraceSampling() {
        return this.traceSampling;
    }

    public boolean isTracingEnabled() {
        if (getTracesSampleRate() == null) {
            getTracesSampler();
            return false;
        }
        return true;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void loadLazyFields() {
        getSerializer();
        retrieveParsedDsn();
        getEnvelopeReader();
        getDateProvider();
    }

    public void merge(@NotNull d0 d0Var) {
        if (d0Var.m() != null) {
            setDsn(d0Var.m());
        }
        if (d0Var.p() != null) {
            setEnvironment(d0Var.p());
        }
        if (d0Var.F() != null) {
            setRelease(d0Var.F());
        }
        if (d0Var.l() != null) {
            setDist(d0Var.l());
        }
        if (d0Var.H() != null) {
            setServerName(d0Var.H());
        }
        if (d0Var.E() != null) {
            setProxy(d0Var.E());
        }
        if (d0Var.o() != null) {
            setEnableUncaughtExceptionHandler(d0Var.o().booleanValue());
        }
        if (d0Var.y() != null) {
            setPrintUncaughtStackTrace(d0Var.y().booleanValue());
        }
        if (d0Var.L() != null) {
            setTracesSampleRate(d0Var.L());
        }
        if (d0Var.B() != null) {
            setProfilesSampleRate(d0Var.B());
        }
        if (d0Var.k() != null) {
            setDebug(d0Var.k().booleanValue());
        }
        if (d0Var.n() != null) {
            setEnableDeduplication(d0Var.n().booleanValue());
        }
        if (d0Var.G() != null) {
            setSendClientReports(d0Var.G().booleanValue());
        }
        if (d0Var.S() != null) {
            setForceInit(d0Var.S().booleanValue());
        }
        for (Map.Entry entry : new HashMap(d0Var.J()).entrySet()) {
            this.tags.put((String) entry.getKey(), (String) entry.getValue());
        }
        for (String str : new ArrayList(d0Var.w())) {
            addInAppInclude(str);
        }
        for (String str2 : new ArrayList(d0Var.v())) {
            addInAppExclude(str2);
        }
        Iterator it = new HashSet(d0Var.t()).iterator();
        while (it.hasNext()) {
            addIgnoredExceptionForType((Class) it.next());
        }
        if (d0Var.K() != null) {
            setTracePropagationTargets(new ArrayList(d0Var.K()));
        }
        for (String str3 : new ArrayList(d0Var.i())) {
            addContextTag(str3);
        }
        if (d0Var.D() != null) {
            setProguardUuid(d0Var.D());
        }
        if (d0Var.q() != null) {
            setIdleTimeout(d0Var.q());
        }
        for (String str4 : d0Var.h()) {
            addBundleId(str4);
        }
        if (d0Var.R() != null) {
            setEnabled(d0Var.R().booleanValue());
        }
        if (d0Var.P() != null) {
            setEnablePrettySerializationOutput(d0Var.P().booleanValue());
        }
        if (d0Var.V() != null) {
            setSendModules(d0Var.V().booleanValue());
        }
        if (d0Var.r() != null) {
            setIgnoredCheckIns(new ArrayList(d0Var.r()));
        }
        if (d0Var.u() != null) {
            setIgnoredTransactions(new ArrayList(d0Var.u()));
        }
        if (d0Var.s() != null) {
            setIgnoredErrors(new ArrayList(d0Var.s()));
        }
        if (d0Var.N() != null) {
            setEnableBackpressureHandling(d0Var.N().booleanValue());
        }
        if (d0Var.x() != null) {
            setMaxRequestBodySize(d0Var.x());
        }
        if (d0Var.U() != null) {
            setSendDefaultPii(d0Var.U().booleanValue());
        }
        if (d0Var.M() != null) {
            setCaptureOpenTelemetryEvents(d0Var.M().booleanValue());
        }
        if (d0Var.Q() != null) {
            setEnableSpotlight(d0Var.Q().booleanValue());
        }
        if (d0Var.I() != null) {
            setSpotlightConnectionUrl(d0Var.I());
        }
        if (d0Var.T() != null) {
            setGlobalHubMode(d0Var.T());
        }
        if (d0Var.j() != null) {
            if (getCron() == null) {
                setCron(d0Var.j());
            } else {
                if (d0Var.j().a() != null) {
                    getCron().f(d0Var.j().a());
                }
                if (d0Var.j().c() != null) {
                    getCron().h(d0Var.j().c());
                }
                if (d0Var.j().e() != null) {
                    getCron().j(d0Var.j().e());
                }
                if (d0Var.j().b() != null) {
                    getCron().g(d0Var.j().b());
                }
                if (d0Var.j().d() != null) {
                    getCron().i(d0Var.j().d());
                }
            }
        }
        if (d0Var.O() != null) {
            getLogs().b(d0Var.O().booleanValue());
        }
        if (d0Var.A() != null) {
            setProfileSessionSampleRate(d0Var.A());
        }
        if (d0Var.C() != null) {
            setProfilingTracesDirPath(d0Var.C());
        }
        if (d0Var.z() != null) {
            setProfileLifecycle(d0Var.z());
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @NotNull
    public u retrieveParsedDsn() {
        return (u) this.parsedDsn.a();
    }

    public void setAttachServerName(boolean z10) {
        this.attachServerName = z10;
    }

    public void setAttachStacktrace(boolean z10) {
        this.attachStacktrace = z10;
    }

    public void setAttachThreads(boolean z10) {
        this.attachThreads = z10;
    }

    public void setBackpressureMonitor(@NotNull io.sentry.backpressure.b bVar) {
        this.backpressureMonitor = bVar;
    }

    public void setBeforeBreadcrumb(a aVar) {
        this.beforeBreadcrumb = aVar;
    }

    public void setBeforeEnvelopeCallback(b bVar) {
        this.beforeEnvelopeCallback = bVar;
    }

    public void setBeforeSend(c cVar) {
        this.beforeSend = cVar;
    }

    public void setBeforeSendFeedback(c cVar) {
        this.beforeSendFeedback = cVar;
    }

    public void setBeforeSendReplay(d dVar) {
    }

    public void setBeforeSendTransaction(e eVar) {
    }

    public void setCacheDirPath(String str) {
        this.cacheDirPath = str;
    }

    public void setCaptureOpenTelemetryEvents(boolean z10) {
        this.captureOpenTelemetryEvents = z10;
    }

    public void setCompositePerformanceCollector(@NotNull io.sentry.h hVar) {
        this.compositePerformanceCollector = hVar;
    }

    public void setConnectionStatusProvider(@NotNull k0 k0Var) {
        this.connectionStatusProvider = k0Var;
    }

    public void setConnectionTimeoutMillis(int i10) {
        this.connectionTimeoutMillis = i10;
    }

    public void setContinuousProfiler(l0 l0Var) {
        if (this.continuousProfiler == e2.a() && l0Var != null) {
            this.continuousProfiler = l0Var;
        }
    }

    public void setCron(f fVar) {
        this.cron = fVar;
    }

    public void setDateProvider(@NotNull k5 k5Var) {
        this.dateProvider.c(k5Var);
    }

    public void setDeadlineTimeout(long j10) {
        this.deadlineTimeout = j10;
    }

    public void setDebug(boolean z10) {
        this.debug = z10;
    }

    public void setDebugMetaLoader(io.sentry.internal.debugmeta.a aVar) {
        if (aVar == null) {
            aVar = io.sentry.internal.debugmeta.b.b();
        }
        this.debugMetaLoader = aVar;
    }

    public void setDefaultScopeType(@NotNull d4 d4Var) {
        this.defaultScopeType = d4Var;
    }

    public void setDiagnosticLevel(SentryLevel sentryLevel) {
        if (sentryLevel == null) {
            sentryLevel = DEFAULT_DIAGNOSTIC_LEVEL;
        }
        this.diagnosticLevel = sentryLevel;
    }

    public void setDist(String str) {
        this.dist = str;
    }

    public void setDistinctId(String str) {
        this.distinctId = str;
    }

    public void setDistribution(@NotNull g gVar) {
        if (gVar == null) {
            gVar = new g();
        }
        this.distribution = gVar;
    }

    public void setDistributionController(m0 m0Var) {
        if (m0Var == null) {
            m0Var = f2.a();
        }
        this.distributionController = m0Var;
    }

    public void setDsn(String str) {
        this.dsn = str;
        this.parsedDsn.b();
        this.dsnHash = io.sentry.util.f0.a(this.dsn, this.logger);
    }

    public void setEnableAppStartProfiling(boolean z10) {
        this.enableAppStartProfiling = z10;
    }

    public void setEnableAutoSessionTracking(boolean z10) {
        this.enableAutoSessionTracking = z10;
    }

    public void setEnableBackpressureHandling(boolean z10) {
        this.enableBackpressureHandling = z10;
    }

    public void setEnableDeduplication(boolean z10) {
        this.enableDeduplication = z10;
    }

    public void setEnableEventSizeLimiting(boolean z10) {
        this.enableEventSizeLimiting = z10;
    }

    public void setEnableExternalConfiguration(boolean z10) {
        this.enableExternalConfiguration = z10;
    }

    public void setEnablePrettySerializationOutput(boolean z10) {
        this.enablePrettySerializationOutput = z10;
    }

    public void setEnableScopePersistence(boolean z10) {
        this.enableScopePersistence = z10;
    }

    public void setEnableScreenTracking(boolean z10) {
        this.enableScreenTracking = z10;
    }

    public void setEnableShutdownHook(boolean z10) {
        this.enableShutdownHook = z10;
    }

    public void setEnableSpotlight(boolean z10) {
        this.enableSpotlight = z10;
    }

    public void setEnableTimeToFullDisplayTracing(boolean z10) {
        this.enableTimeToFullDisplayTracing = z10;
    }

    public void setEnableUncaughtExceptionHandler(boolean z10) {
        this.enableUncaughtExceptionHandler = z10;
    }

    public void setEnableUserInteractionBreadcrumbs(boolean z10) {
        this.enableUserInteractionBreadcrumbs = z10;
    }

    public void setEnableUserInteractionTracing(boolean z10) {
        this.enableUserInteractionTracing = z10;
    }

    public void setEnabled(boolean z10) {
        this.enabled = z10;
    }

    public void setEnvelopeDiskCache(io.sentry.cache.g gVar) {
        if (gVar == null) {
            gVar = io.sentry.transport.s.b();
        }
        this.envelopeDiskCache = gVar;
    }

    public void setEnvelopeReader(n0 n0Var) {
        io.sentry.util.r rVar = this.envelopeReader;
        if (n0Var == null) {
            n0Var = g2.b();
        }
        rVar.c(n0Var);
    }

    public void setEnvironment(String str) {
        this.environment = str;
    }

    public void setExecutorService(@NotNull z0 z0Var) {
        if (z0Var != null) {
            this.executorService = z0Var;
        }
    }

    public void setFatalLogger(ILogger iLogger) {
        if (iLogger == null) {
            iLogger = i2.e();
        }
        this.fatalLogger = iLogger;
    }

    public void setFeedbackOptions(@NotNull r6 r6Var) {
        this.feedbackOptions = r6Var;
    }

    public void setFlushTimeoutMillis(long j10) {
        this.flushTimeoutMillis = j10;
    }

    public void setForceInit(boolean z10) {
        this.forceInit = z10;
    }

    public void setFullyDisplayedReporter(@NotNull f0 f0Var) {
        this.fullyDisplayedReporter = f0Var;
    }

    public void setGestureTargetLocators(@NotNull List<io.sentry.internal.gestures.a> list) {
        this.gestureTargetLocators.clear();
        this.gestureTargetLocators.addAll(list);
    }

    public void setGlobalHubMode(Boolean bool) {
        this.globalHubMode = bool;
    }

    public void setIdleTimeout(Long l10) {
        this.idleTimeout = l10;
    }

    public void setIgnoredCheckIns(List<String> list) {
        if (list == null) {
            this.ignoredCheckIns = null;
            return;
        }
        ArrayList arrayList = new ArrayList();
        for (String str : list) {
            if (!str.isEmpty()) {
                arrayList.add(new e0(str));
            }
        }
        this.ignoredCheckIns = arrayList;
    }

    public void setIgnoredErrors(List<String> list) {
        if (list == null) {
            this.ignoredErrors = null;
            return;
        }
        ArrayList arrayList = new ArrayList();
        for (String str : list) {
            if (str != null && !str.isEmpty()) {
                arrayList.add(new e0(str));
            }
        }
        this.ignoredErrors = arrayList;
    }

    public void setIgnoredSpanOrigins(List<String> list) {
        if (list == null) {
            this.ignoredSpanOrigins = null;
            return;
        }
        ArrayList arrayList = new ArrayList();
        for (String str : list) {
            if (str != null && !str.isEmpty()) {
                arrayList.add(new e0(str));
            }
        }
        this.ignoredSpanOrigins = arrayList;
    }

    public void setIgnoredTransactions(List<String> list) {
        if (list == null) {
            this.ignoredTransactions = null;
            return;
        }
        ArrayList arrayList = new ArrayList();
        for (String str : list) {
            if (str != null && !str.isEmpty()) {
                arrayList.add(new e0(str));
            }
        }
        this.ignoredTransactions = arrayList;
    }

    public void setInitPriority(@NotNull i1 i1Var) {
        this.initPriority = i1Var;
    }

    @Deprecated
    public void setInstrumenter(@NotNull j1 j1Var) {
        this.instrumenter = j1Var;
    }

    public void setLogger(ILogger iLogger) {
        ILogger qVar;
        if (iLogger == null) {
            qVar = i2.e();
        } else {
            qVar = new q(this, iLogger);
        }
        this.logger = qVar;
    }

    public void setLogs(@NotNull h hVar) {
        this.logs = hVar;
    }

    public void setMaxAttachmentSize(long j10) {
        this.maxAttachmentSize = j10;
    }

    public void setMaxBreadcrumbs(int i10) {
        this.maxBreadcrumbs = i10;
    }

    public void setMaxCacheItems(int i10) {
        this.maxCacheItems = i10;
    }

    public void setMaxDepth(int i10) {
        this.maxDepth = i10;
    }

    public void setMaxFeatureFlags(int i10) {
        this.maxFeatureFlags = i10;
    }

    public void setMaxQueueSize(int i10) {
        if (i10 > 0) {
            this.maxQueueSize = i10;
        }
    }

    public void setMaxRequestBodySize(@NotNull m mVar) {
        this.maxRequestBodySize = mVar;
    }

    public void setMaxSpans(int i10) {
        this.maxSpans = i10;
    }

    public void setMaxTraceFileSize(long j10) {
        this.maxTraceFileSize = j10;
    }

    public void setModulesLoader(io.sentry.internal.modules.b bVar) {
        if (bVar == null) {
            bVar = io.sentry.internal.modules.e.b();
        }
        this.modulesLoader = bVar;
    }

    public void setOnDiscard(i iVar) {
    }

    public void setOnOversizedEvent(j jVar) {
        this.onOversizedEvent = jVar;
    }

    public void setOpenTelemetryMode(@NotNull e7 e7Var) {
        this.openTelemetryMode = e7Var;
    }

    public void setPrintUncaughtStackTrace(boolean z10) {
        this.printUncaughtStackTrace = z10;
    }

    public void setProfileLifecycle(@NotNull o3 o3Var) {
        this.profileLifecycle = o3Var;
        if (o3Var == o3.TRACE && !isTracingEnabled()) {
            this.logger.c(SentryLevel.WARNING, "Profiling lifecycle is set to TRACE but tracing is disabled. Profiling will not be started automatically.", new Object[0]);
        }
    }

    public void setProfileSessionSampleRate(Double d10) {
        if (io.sentry.util.c0.c(d10)) {
            this.profileSessionSampleRate = d10;
            return;
        }
        throw new IllegalArgumentException("The value " + d10 + " is not valid. Use values between 0.0 and 1.0.");
    }

    public void setProfilerConverter(@NotNull u0 u0Var) {
        this.profilerConverter = u0Var;
    }

    public void setProfilesSampleRate(Double d10) {
        if (io.sentry.util.c0.d(d10)) {
            this.profilesSampleRate = d10;
            return;
        }
        throw new IllegalArgumentException("The value " + d10 + " is not valid. Use null to disable or values between 0.0 and 1.0.");
    }

    public void setProfilesSampler(k kVar) {
    }

    public void setProfilingTracesDirPath(String str) {
        this.profilingTracesDirPath = str;
    }

    public void setProfilingTracesHz(int i10) {
        this.profilingTracesHz = i10;
    }

    public void setProguardUuid(String str) {
        this.proguardUuid = str;
    }

    public void setPropagateTraceparent(boolean z10) {
        this.propagateTraceparent = z10;
    }

    public void setProxy(l lVar) {
        this.proxy = lVar;
    }

    public void setReadTimeoutMillis(int i10) {
        this.readTimeoutMillis = i10;
    }

    public void setRelease(String str) {
        this.release = str;
    }

    public void setReplayController(u3 u3Var) {
        if (u3Var == null) {
            u3Var = l2.a();
        }
        this.replayController = u3Var;
    }

    public void setRuntimeManager(@NotNull io.sentry.util.runtime.a aVar) {
        this.runtimeManager = aVar;
    }

    public void setSampleRate(Double d10) {
        if (io.sentry.util.c0.f(d10)) {
            this.sampleRate = d10;
            return;
        }
        throw new IllegalArgumentException("The value " + d10 + " is not valid. Use null to disable or values >= 0.0 and <= 1.0.");
    }

    public void setSdkVersion(io.sentry.protocol.r rVar) {
        io.sentry.protocol.r o10 = getSessionReplay().o();
        io.sentry.protocol.r rVar2 = this.sdkVersion;
        if (rVar2 != null && o10 != null && rVar2.equals(o10)) {
            getSessionReplay().M(rVar);
        }
        this.sdkVersion = rVar;
    }

    public void setSendClientReports(boolean z10) {
        this.sendClientReports = z10;
        if (z10) {
            this.clientReportRecorder = new io.sentry.clientreport.e(this);
        } else {
            this.clientReportRecorder = new io.sentry.clientreport.j();
        }
    }

    public void setSendDefaultPii(boolean z10) {
        this.sendDefaultPii = z10;
    }

    public void setSendModules(boolean z10) {
        this.sendModules = z10;
    }

    public void setSentryClientName(String str) {
        this.sentryClientName = str;
    }

    public void setSerializer(b1 b1Var) {
        io.sentry.util.r rVar = this.serializer;
        if (b1Var == null) {
            b1Var = w2.g();
        }
        rVar.c(b1Var);
    }

    public void setServerName(String str) {
        this.serverName = str;
    }

    public void setSessionFlushTimeoutMillis(long j10) {
        this.sessionFlushTimeoutMillis = j10;
    }

    public void setSessionReplay(@NotNull m7 m7Var) {
        this.sessionReplay = m7Var;
    }

    public void setSessionTrackingIntervalMillis(long j10) {
        this.sessionTrackingIntervalMillis = j10;
    }

    public void setShutdownTimeoutMillis(long j10) {
        this.shutdownTimeoutMillis = j10;
    }

    public void setSocketTagger(c1 c1Var) {
        if (c1Var == null) {
            c1Var = x2.c();
        }
        this.socketTagger = c1Var;
    }

    public void setSpanFactory(@NotNull d1 d1Var) {
        this.spanFactory = d1Var;
    }

    public void setSpotlightConnectionUrl(String str) {
        this.spotlightConnectionUrl = str;
    }

    public void setSslSocketFactory(SSLSocketFactory sSLSocketFactory) {
        this.sslSocketFactory = sSLSocketFactory;
    }

    public void setStartProfilerOnAppStart(boolean z10) {
        this.startProfilerOnAppStart = z10;
    }

    public void setTag(String str, String str2) {
        if (str == null) {
            return;
        }
        if (str2 == null) {
            this.tags.remove(str);
        } else {
            this.tags.put(str, str2);
        }
    }

    public void setThreadChecker(@NotNull io.sentry.util.thread.a aVar) {
        this.threadChecker = aVar;
    }

    public void setTraceOptionsRequests(boolean z10) {
        this.traceOptionsRequests = z10;
    }

    public void setTracePropagationTargets(List<String> list) {
        if (list == null) {
            this.tracePropagationTargets = null;
            return;
        }
        ArrayList arrayList = new ArrayList();
        for (String str : list) {
            if (!str.isEmpty()) {
                arrayList.add(str);
            }
        }
        this.tracePropagationTargets = arrayList;
    }

    @Deprecated
    public void setTraceSampling(boolean z10) {
        this.traceSampling = z10;
    }

    public void setTracesSampleRate(Double d10) {
        if (io.sentry.util.c0.g(d10)) {
            this.tracesSampleRate = d10;
            return;
        }
        throw new IllegalArgumentException("The value " + d10 + " is not valid. Use null to disable or values between 0.0 and 1.0.");
    }

    public void setTracesSampler(n nVar) {
    }

    public void setTransactionProfiler(f1 f1Var) {
        if (this.transactionProfiler == b3.c() && f1Var != null) {
            this.transactionProfiler = f1Var;
        }
    }

    public void setTransportFactory(g1 g1Var) {
        if (g1Var == null) {
            g1Var = c3.b();
        }
        this.transportFactory = g1Var;
    }

    public void setTransportGate(io.sentry.transport.r rVar) {
        if (rVar == null) {
            rVar = io.sentry.transport.u.b();
        }
        this.transportGate = rVar;
    }

    public void setVersionDetector(@NotNull h1 h1Var) {
        this.versionDetector = h1Var;
    }

    public void setViewHierarchyExporters(@NotNull List<Object> list) {
        this.viewHierarchyExporters.clear();
        this.viewHierarchyExporters.addAll(list);
    }

    private k7(boolean z10) {
        CopyOnWriteArrayList copyOnWriteArrayList = new CopyOnWriteArrayList();
        this.eventProcessors = copyOnWriteArrayList;
        this.ignoredExceptionsForType = new CopyOnWriteArraySet();
        this.ignoredErrors = null;
        CopyOnWriteArrayList copyOnWriteArrayList2 = new CopyOnWriteArrayList();
        this.integrations = copyOnWriteArrayList2;
        this.bundleIds = new CopyOnWriteArraySet();
        this.parsedDsn = new io.sentry.util.r(new r.a() { // from class: io.sentry.f7
            @Override // io.sentry.util.r.a
            public final Object a() {
                return k7.b(k7.this);
            }
        });
        this.shutdownTimeoutMillis = 2000L;
        this.flushTimeoutMillis = 15000L;
        this.sessionFlushTimeoutMillis = 15000L;
        this.logger = i2.e();
        this.fatalLogger = i2.e();
        this.diagnosticLevel = DEFAULT_DIAGNOSTIC_LEVEL;
        this.serializer = new io.sentry.util.r(new r.a() { // from class: io.sentry.g7
            @Override // io.sentry.util.r.a
            public final Object a() {
                return k7.d(k7.this);
            }
        });
        this.envelopeReader = new io.sentry.util.r(new r.a() { // from class: io.sentry.h7
            @Override // io.sentry.util.r.a
            public final Object a() {
                return k7.c(k7.this);
            }
        });
        this.maxDepth = 100;
        this.maxCacheItems = 30;
        this.maxQueueSize = 30;
        this.maxBreadcrumbs = 100;
        this.maxFeatureFlags = 100;
        this.inAppExcludes = new CopyOnWriteArrayList();
        this.inAppIncludes = new CopyOnWriteArrayList();
        this.transportFactory = c3.b();
        this.transportGate = io.sentry.transport.u.b();
        this.attachStacktrace = true;
        this.enableAutoSessionTracking = true;
        this.sessionTrackingIntervalMillis = 30000L;
        this.attachServerName = true;
        this.enableUncaughtExceptionHandler = true;
        this.printUncaughtStackTrace = false;
        this.executorService = v2.f();
        this.connectionTimeoutMillis = 30000;
        this.readTimeoutMillis = 30000;
        this.envelopeDiskCache = io.sentry.transport.s.b();
        this.sendDefaultPii = false;
        this.observers = new CopyOnWriteArrayList();
        this.optionsObservers = new CopyOnWriteArrayList();
        this.tags = new ConcurrentHashMap();
        this.maxAttachmentSize = 20971520L;
        this.enableDeduplication = true;
        this.enableEventSizeLimiting = false;
        this.maxSpans = 1000;
        this.enableShutdownHook = true;
        this.maxRequestBodySize = m.NONE;
        this.traceSampling = true;
        this.maxTraceFileSize = 5242880L;
        this.transactionProfiler = b3.c();
        this.continuousProfiler = e2.a();
        this.profilerConverter = j2.b();
        this.tracePropagationTargets = null;
        this.defaultTracePropagationTargets = Collections.singletonList(DEFAULT_PROPAGATION_TARGETS);
        this.propagateTraceparent = false;
        this.idleTimeout = 3000L;
        this.contextTags = new CopyOnWriteArrayList();
        this.sendClientReports = true;
        this.clientReportRecorder = new io.sentry.clientreport.e(this);
        this.modulesLoader = io.sentry.internal.modules.e.b();
        this.debugMetaLoader = io.sentry.internal.debugmeta.b.b();
        this.enableUserInteractionTracing = false;
        this.enableUserInteractionBreadcrumbs = true;
        this.instrumenter = j1.SENTRY;
        this.gestureTargetLocators = new ArrayList();
        this.viewHierarchyExporters = new ArrayList();
        this.threadChecker = io.sentry.util.thread.b.d();
        this.traceOptionsRequests = true;
        this.dateProvider = new io.sentry.util.r(new r.a() { // from class: io.sentry.i7
            @Override // io.sentry.util.r.a
            public final Object a() {
                return k7.a();
            }
        });
        this.performanceCollectors = new ArrayList();
        this.compositePerformanceCollector = c2.g();
        this.enableTimeToFullDisplayTracing = false;
        this.fullyDisplayedReporter = f0.a();
        this.connectionStatusProvider = new d2();
        this.enabled = true;
        this.enablePrettySerializationOutput = true;
        this.sendModules = true;
        this.enableSpotlight = false;
        this.enableScopePersistence = true;
        this.ignoredCheckIns = null;
        this.ignoredSpanOrigins = null;
        this.ignoredTransactions = null;
        this.backpressureMonitor = io.sentry.backpressure.c.b();
        this.enableBackpressureHandling = true;
        this.enableAppStartProfiling = false;
        this.spanFactory = z2.b();
        this.profilingTracesHz = 101;
        this.cron = null;
        this.replayController = l2.a();
        this.distributionController = f2.a();
        this.enableScreenTracking = true;
        this.defaultScopeType = d4.ISOLATION;
        this.initPriority = i1.MEDIUM;
        this.forceInit = false;
        this.globalHubMode = null;
        this.lock = new io.sentry.util.a();
        this.openTelemetryMode = e7.AUTO;
        this.captureOpenTelemetryEvents = false;
        this.versionDetector = d3.b();
        this.profileLifecycle = o3.MANUAL;
        this.startProfilerOnAppStart = false;
        this.deadlineTimeout = 30000L;
        this.logs = new h();
        this.socketTagger = x2.c();
        this.runtimeManager = new io.sentry.util.runtime.b();
        this.distribution = new g();
        io.sentry.protocol.r createSdkVersion = createSdkVersion();
        this.experimental = new c0(z10, createSdkVersion);
        this.sessionReplay = new m7(z10, createSdkVersion);
        this.feedbackOptions = new r6(new r6.a() { // from class: io.sentry.j7
        });
        if (z10) {
            return;
        }
        setSpanFactory(f8.a(new io.sentry.util.u(), i2.e()));
        q6 q6Var = new q6(this);
        this.executorService = q6Var;
        q6Var.b();
        copyOnWriteArrayList2.add(new UncaughtExceptionHandlerIntegration());
        copyOnWriteArrayList2.add(new ShutdownHookIntegration());
        copyOnWriteArrayList2.add(new SpotlightIntegration());
        copyOnWriteArrayList.add(new y1(this));
        copyOnWriteArrayList.add(new v(this));
        if (io.sentry.util.a0.c()) {
            copyOnWriteArrayList.add(new n7());
        }
        setSentryClientName("sentry.java/8.27.0");
        setSdkVersion(createSdkVersion);
        e();
    }
}
