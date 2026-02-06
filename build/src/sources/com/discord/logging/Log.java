package com.discord.logging;

import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import kotlin.reflect.KClass;
import org.jetbrains.annotations.NotNull;
import timber.log.a;
@Metadata(d1 = {"\u0000&\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0010\u0003\n\u0002\u0018\u0002\n\u0002\b\u0004\bÆ\u0002\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\"\u0010\u0004\u001a\u00020\u00052\u0006\u0010\u0006\u001a\u00020\u00072\u0006\u0010\b\u001a\u00020\u00072\n\b\u0002\u0010\t\u001a\u0004\u0018\u00010\nJ&\u0010\u0004\u001a\u00020\u00052\n\u0010\u0006\u001a\u0006\u0012\u0002\b\u00030\u000b2\u0006\u0010\b\u001a\u00020\u00072\n\b\u0002\u0010\t\u001a\u0004\u0018\u00010\nJ\"\u0010\f\u001a\u00020\u00052\u0006\u0010\u0006\u001a\u00020\u00072\u0006\u0010\b\u001a\u00020\u00072\n\b\u0002\u0010\t\u001a\u0004\u0018\u00010\nJ&\u0010\f\u001a\u00020\u00052\n\u0010\u0006\u001a\u0006\u0012\u0002\b\u00030\u000b2\u0006\u0010\b\u001a\u00020\u00072\n\b\u0002\u0010\t\u001a\u0004\u0018\u00010\nJ\"\u0010\r\u001a\u00020\u00052\u0006\u0010\u0006\u001a\u00020\u00072\u0006\u0010\b\u001a\u00020\u00072\n\b\u0002\u0010\t\u001a\u0004\u0018\u00010\nJ&\u0010\r\u001a\u00020\u00052\n\u0010\u0006\u001a\u0006\u0012\u0002\b\u00030\u000b2\u0006\u0010\b\u001a\u00020\u00072\n\b\u0002\u0010\t\u001a\u0004\u0018\u00010\nJ\"\u0010\u000e\u001a\u00020\u00052\u0006\u0010\u0006\u001a\u00020\u00072\u0006\u0010\b\u001a\u00020\u00072\n\b\u0002\u0010\t\u001a\u0004\u0018\u00010\nJ&\u0010\u000e\u001a\u00020\u00052\n\u0010\u0006\u001a\u0006\u0012\u0002\b\u00030\u000b2\u0006\u0010\b\u001a\u00020\u00072\n\b\u0002\u0010\t\u001a\u0004\u0018\u00010\n¨\u0006\u000f"}, d2 = {"Lcom/discord/logging/Log;", "", "<init>", "()V", "d", "", "tag", "", "message", "exception", "", "Lkotlin/reflect/KClass;", "i", "w", "e", "logging_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class Log {
    @NotNull
    public static final Log INSTANCE = new Log();

    static {
        a.f50605a.c(new LoggingTree());
    }

    private Log() {
    }

    public static /* synthetic */ void d$default(Log log, String str, String str2, Throwable th2, int i10, Object obj) {
        if ((i10 & 4) != 0) {
            th2 = null;
        }
        log.d(str, str2, th2);
    }

    public static /* synthetic */ void e$default(Log log, String str, String str2, Throwable th2, int i10, Object obj) {
        if ((i10 & 4) != 0) {
            th2 = null;
        }
        log.e(str, str2, th2);
    }

    public static /* synthetic */ void i$default(Log log, String str, String str2, Throwable th2, int i10, Object obj) {
        if ((i10 & 4) != 0) {
            th2 = null;
        }
        log.i(str, str2, th2);
    }

    public static /* synthetic */ void w$default(Log log, String str, String str2, Throwable th2, int i10, Object obj) {
        if ((i10 & 4) != 0) {
            th2 = null;
        }
        log.w(str, str2, th2);
    }

    public final void d(@NotNull String tag, @NotNull String message, Throwable th2) {
        Intrinsics.checkNotNullParameter(tag, "tag");
        Intrinsics.checkNotNullParameter(message, "message");
        a.b bVar = a.f50605a;
        bVar.f(tag);
        bVar.d(th2, message, new Object[0]);
    }

    public final void e(@NotNull String tag, @NotNull String message, Throwable th2) {
        Intrinsics.checkNotNullParameter(tag, "tag");
        Intrinsics.checkNotNullParameter(message, "message");
        a.b bVar = a.f50605a;
        bVar.f(tag);
        bVar.e(th2, message, new Object[0]);
    }

    public final void i(@NotNull String tag, @NotNull String message, Throwable th2) {
        Intrinsics.checkNotNullParameter(tag, "tag");
        Intrinsics.checkNotNullParameter(message, "message");
        a.b bVar = a.f50605a;
        bVar.f(tag);
        bVar.i(th2, message, new Object[0]);
    }

    public final void w(@NotNull String tag, @NotNull String message, Throwable th2) {
        Intrinsics.checkNotNullParameter(tag, "tag");
        Intrinsics.checkNotNullParameter(message, "message");
        a.b bVar = a.f50605a;
        bVar.f(tag);
        bVar.w(th2, message, new Object[0]);
    }

    public static /* synthetic */ void d$default(Log log, KClass kClass, String str, Throwable th2, int i10, Object obj) {
        if ((i10 & 4) != 0) {
            th2 = null;
        }
        log.d(kClass, str, th2);
    }

    public static /* synthetic */ void e$default(Log log, KClass kClass, String str, Throwable th2, int i10, Object obj) {
        if ((i10 & 4) != 0) {
            th2 = null;
        }
        log.e(kClass, str, th2);
    }

    public static /* synthetic */ void i$default(Log log, KClass kClass, String str, Throwable th2, int i10, Object obj) {
        if ((i10 & 4) != 0) {
            th2 = null;
        }
        log.i(kClass, str, th2);
    }

    public static /* synthetic */ void w$default(Log log, KClass kClass, String str, Throwable th2, int i10, Object obj) {
        if ((i10 & 4) != 0) {
            th2 = null;
        }
        log.w(kClass, str, th2);
    }

    public final void d(@NotNull KClass tag, @NotNull String message, Throwable th2) {
        Intrinsics.checkNotNullParameter(tag, "tag");
        Intrinsics.checkNotNullParameter(message, "message");
        String simpleName = ds.a.b(tag).getSimpleName();
        Intrinsics.checkNotNullExpressionValue(simpleName, "getSimpleName(...)");
        d(simpleName, message, th2);
    }

    public final void e(@NotNull KClass tag, @NotNull String message, Throwable th2) {
        Intrinsics.checkNotNullParameter(tag, "tag");
        Intrinsics.checkNotNullParameter(message, "message");
        String simpleName = ds.a.b(tag).getSimpleName();
        Intrinsics.checkNotNullExpressionValue(simpleName, "getSimpleName(...)");
        e(simpleName, message, th2);
    }

    public final void i(@NotNull KClass tag, @NotNull String message, Throwable th2) {
        Intrinsics.checkNotNullParameter(tag, "tag");
        Intrinsics.checkNotNullParameter(message, "message");
        String simpleName = ds.a.b(tag).getSimpleName();
        Intrinsics.checkNotNullExpressionValue(simpleName, "getSimpleName(...)");
        i(simpleName, message, th2);
    }

    public final void w(@NotNull KClass tag, @NotNull String message, Throwable th2) {
        Intrinsics.checkNotNullParameter(tag, "tag");
        Intrinsics.checkNotNullParameter(message, "message");
        String simpleName = ds.a.b(tag).getSimpleName();
        Intrinsics.checkNotNullExpressionValue(simpleName, "getSimpleName(...)");
        w(simpleName, message, th2);
    }
}
