package com.discord.crash_reporting;

import com.discord.crash_reporting.CrashReporting;
import com.discord.logging.Log;
import java.util.Map;
import kotlin.Metadata;
import kotlin.collections.o0;
import kotlin.jvm.internal.Intrinsics;
import or.v;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u00006\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\u0003\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0010\b\n\u0002\b\u0004\n\u0002\u0010\u000b\n\u0002\b\u0011\u0018\u00002\u00020\u0001B\u0007¢\u0006\u0004\b\u0002\u0010\u0003J+\u0010\u000b\u001a\u00020\n2\u0006\u0010\u0005\u001a\u00020\u00042\u0006\u0010\u0007\u001a\u00020\u00062\n\b\u0002\u0010\t\u001a\u0004\u0018\u00010\bH\u0002¢\u0006\u0004\b\u000b\u0010\fJ\u0017\u0010\u000e\u001a\u00020\n2\u0006\u0010\u0005\u001a\u00020\rH\u0016¢\u0006\u0004\b\u000e\u0010\u000fJ\u000f\u0010\u0010\u001a\u00020\rH\u0016¢\u0006\u0004\b\u0010\u0010\u0011J\u0017\u0010\u0013\u001a\u00020\u00122\u0006\u0010\u0005\u001a\u00020\rH\u0016¢\u0006\u0004\b\u0013\u0010\u0014J\u001f\u0010\u0017\u001a\u00020\n2\u0006\u0010\u0015\u001a\u00020\u00062\u0006\u0010\u0016\u001a\u00020\u0006H\u0016¢\u0006\u0004\b\u0017\u0010\u0018J'\u0010\u0017\u001a\u00020\n2\u0006\u0010\u0015\u001a\u00020\u00062\u0006\u0010\u0016\u001a\u00020\u00062\u0006\u0010\u0019\u001a\u00020\bH\u0016¢\u0006\u0004\b\u0017\u0010\u001aJ\u001f\u0010\u001b\u001a\u00020\n2\u0006\u0010\u0015\u001a\u00020\u00062\u0006\u0010\u0016\u001a\u00020\u0006H\u0016¢\u0006\u0004\b\u001b\u0010\u0018J'\u0010\u001b\u001a\u00020\n2\u0006\u0010\u0015\u001a\u00020\u00062\u0006\u0010\u0016\u001a\u00020\u00062\u0006\u0010\u0019\u001a\u00020\bH\u0016¢\u0006\u0004\b\u001b\u0010\u001aJ\u001f\u0010\u001c\u001a\u00020\n2\u0006\u0010\u0015\u001a\u00020\u00062\u0006\u0010\u0016\u001a\u00020\u0006H\u0016¢\u0006\u0004\b\u001c\u0010\u0018J'\u0010\u001c\u001a\u00020\n2\u0006\u0010\u0015\u001a\u00020\u00062\u0006\u0010\u0016\u001a\u00020\u00062\u0006\u0010\u0019\u001a\u00020\bH\u0016¢\u0006\u0004\b\u001c\u0010\u001aJ\u001f\u0010\u001d\u001a\u00020\n2\u0006\u0010\u0015\u001a\u00020\u00062\u0006\u0010\u0016\u001a\u00020\u0006H\u0016¢\u0006\u0004\b\u001d\u0010\u0018J'\u0010\u001d\u001a\u00020\n2\u0006\u0010\u0015\u001a\u00020\u00062\u0006\u0010\u0016\u001a\u00020\u00062\u0006\u0010\u0019\u001a\u00020\bH\u0016¢\u0006\u0004\b\u001d\u0010\u001aJ\u001f\u0010\u001e\u001a\u00020\n2\u0006\u0010\u0015\u001a\u00020\u00062\u0006\u0010\u0016\u001a\u00020\u0006H\u0016¢\u0006\u0004\b\u001e\u0010\u0018J'\u0010\u001e\u001a\u00020\n2\u0006\u0010\u0015\u001a\u00020\u00062\u0006\u0010\u0016\u001a\u00020\u00062\u0006\u0010\u0019\u001a\u00020\bH\u0016¢\u0006\u0004\b\u001e\u0010\u001aJ\u001f\u0010\u001f\u001a\u00020\n2\u0006\u0010\u0015\u001a\u00020\u00062\u0006\u0010\u0016\u001a\u00020\u0006H\u0016¢\u0006\u0004\b\u001f\u0010\u0018J'\u0010\u001f\u001a\u00020\n2\u0006\u0010\u0015\u001a\u00020\u00062\u0006\u0010\u0016\u001a\u00020\u00062\u0006\u0010\u0019\u001a\u00020\bH\u0016¢\u0006\u0004\b\u001f\u0010\u001aJ'\u0010!\u001a\u00020\n2\u0006\u0010 \u001a\u00020\r2\u0006\u0010\u0015\u001a\u00020\u00062\u0006\u0010\u0016\u001a\u00020\u0006H\u0016¢\u0006\u0004\b!\u0010\"¨\u0006#"}, d2 = {"Lcom/discord/crash_reporting/FLogDelegate;", "Lp8/c;", "<init>", "()V", "Lcom/discord/crash_reporting/CrashReporting$BreadcrumbLevel;", "level", "", "message", "", "throwable", "", "addSentryBreadcrumb", "(Lcom/discord/crash_reporting/CrashReporting$BreadcrumbLevel;Ljava/lang/String;Ljava/lang/Throwable;)V", "", "setMinimumLoggingLevel", "(I)V", "getMinimumLoggingLevel", "()I", "", "isLoggable", "(I)Z", "tag", "msg", "v", "(Ljava/lang/String;Ljava/lang/String;)V", "tr", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/Throwable;)V", "d", "i", "w", "e", "wtf", "priority", "log", "(ILjava/lang/String;Ljava/lang/String;)V", "crash_reporting_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class FLogDelegate implements p8.c {
    private final void addSentryBreadcrumb(CrashReporting.BreadcrumbLevel breadcrumbLevel, String str, Throwable th2) {
        Map<String, ? extends Object> f10;
        if (th2 == null) {
            f10 = o0.i();
        } else {
            f10 = o0.f(v.a("stacktrace", or.e.b(th2)));
        }
        CrashReporting.INSTANCE.addBreadcrumb(str, f10, "react.native", breadcrumbLevel, false);
    }

    static /* synthetic */ void addSentryBreadcrumb$default(FLogDelegate fLogDelegate, CrashReporting.BreadcrumbLevel breadcrumbLevel, String str, Throwable th2, int i10, Object obj) {
        if ((i10 & 4) != 0) {
            th2 = null;
        }
        fLogDelegate.addSentryBreadcrumb(breadcrumbLevel, str, th2);
    }

    @Override // p8.c
    public void d(@NotNull String tag, @NotNull String msg) {
        Intrinsics.checkNotNullParameter(tag, "tag");
        Intrinsics.checkNotNullParameter(msg, "msg");
        p8.b.a().d(tag, msg);
    }

    @Override // p8.c
    public void e(@NotNull String tag, @NotNull String msg) {
        Intrinsics.checkNotNullParameter(tag, "tag");
        Intrinsics.checkNotNullParameter(msg, "msg");
        Log.e$default(Log.INSTANCE, tag, msg, (Throwable) null, 4, (Object) null);
        addSentryBreadcrumb$default(this, CrashReporting.BreadcrumbLevel.ERROR, msg, null, 4, null);
    }

    public int getMinimumLoggingLevel() {
        return p8.b.a().b();
    }

    @Override // p8.c
    public void i(@NotNull String tag, @NotNull String msg) {
        Intrinsics.checkNotNullParameter(tag, "tag");
        Intrinsics.checkNotNullParameter(msg, "msg");
        Log.i$default(Log.INSTANCE, tag, msg, (Throwable) null, 4, (Object) null);
    }

    @Override // p8.c
    public boolean isLoggable(int i10) {
        return p8.b.a().isLoggable(i10);
    }

    public void log(int i10, @NotNull String tag, @NotNull String msg) {
        Intrinsics.checkNotNullParameter(tag, "tag");
        Intrinsics.checkNotNullParameter(msg, "msg");
        switch (i10) {
            case 2:
                v(tag, msg);
                return;
            case 3:
                d(tag, msg);
                return;
            case 4:
                i(tag, msg);
                return;
            case 5:
                w(tag, msg);
                return;
            case 6:
                e(tag, msg);
                return;
            case 7:
                wtf(tag, msg);
                return;
            default:
                d(tag, msg);
                return;
        }
    }

    public void setMinimumLoggingLevel(int i10) {
        p8.b.a().k(i10);
    }

    @Override // p8.c
    public void v(@NotNull String tag, @NotNull String msg) {
        Intrinsics.checkNotNullParameter(tag, "tag");
        Intrinsics.checkNotNullParameter(msg, "msg");
        p8.b.a().v(tag, msg);
    }

    @Override // p8.c
    public void w(@NotNull String tag, @NotNull String msg) {
        Intrinsics.checkNotNullParameter(tag, "tag");
        Intrinsics.checkNotNullParameter(msg, "msg");
        Log.w$default(Log.INSTANCE, tag, msg, (Throwable) null, 4, (Object) null);
        addSentryBreadcrumb$default(this, CrashReporting.BreadcrumbLevel.WARNING, msg, null, 4, null);
    }

    @Override // p8.c
    public void wtf(@NotNull String tag, @NotNull String msg) {
        Intrinsics.checkNotNullParameter(tag, "tag");
        Intrinsics.checkNotNullParameter(msg, "msg");
        Log.e$default(Log.INSTANCE, tag, msg, (Throwable) null, 4, (Object) null);
        addSentryBreadcrumb$default(this, CrashReporting.BreadcrumbLevel.WARNING, msg, null, 4, null);
    }

    @Override // p8.c
    public void d(@NotNull String tag, @NotNull String msg, @NotNull Throwable tr2) {
        Intrinsics.checkNotNullParameter(tag, "tag");
        Intrinsics.checkNotNullParameter(msg, "msg");
        Intrinsics.checkNotNullParameter(tr2, "tr");
        p8.b.a().d(tag, msg, tr2);
    }

    public void i(@NotNull String tag, @NotNull String msg, @NotNull Throwable tr2) {
        Intrinsics.checkNotNullParameter(tag, "tag");
        Intrinsics.checkNotNullParameter(msg, "msg");
        Intrinsics.checkNotNullParameter(tr2, "tr");
        Log.INSTANCE.i(tag, msg, tr2);
    }

    public void v(@NotNull String tag, @NotNull String msg, @NotNull Throwable tr2) {
        Intrinsics.checkNotNullParameter(tag, "tag");
        Intrinsics.checkNotNullParameter(msg, "msg");
        Intrinsics.checkNotNullParameter(tr2, "tr");
        p8.b.a().l(tag, msg, tr2);
    }

    @Override // p8.c
    public void e(@NotNull String tag, @NotNull String msg, @NotNull Throwable tr2) {
        Intrinsics.checkNotNullParameter(tag, "tag");
        Intrinsics.checkNotNullParameter(msg, "msg");
        Intrinsics.checkNotNullParameter(tr2, "tr");
        Log.INSTANCE.e(tag, msg, tr2);
        addSentryBreadcrumb(CrashReporting.BreadcrumbLevel.ERROR, msg, tr2);
    }

    @Override // p8.c
    public void w(@NotNull String tag, @NotNull String msg, @NotNull Throwable tr2) {
        Intrinsics.checkNotNullParameter(tag, "tag");
        Intrinsics.checkNotNullParameter(msg, "msg");
        Intrinsics.checkNotNullParameter(tr2, "tr");
        Log.INSTANCE.w(tag, msg, tr2);
        addSentryBreadcrumb(CrashReporting.BreadcrumbLevel.WARNING, msg, tr2);
    }

    @Override // p8.c
    public void wtf(@NotNull String tag, @NotNull String msg, @NotNull Throwable tr2) {
        Intrinsics.checkNotNullParameter(tag, "tag");
        Intrinsics.checkNotNullParameter(msg, "msg");
        Intrinsics.checkNotNullParameter(tr2, "tr");
        Log.INSTANCE.e(tag, msg, tr2);
        addSentryBreadcrumb(CrashReporting.BreadcrumbLevel.ERROR, msg, tr2);
    }
}
