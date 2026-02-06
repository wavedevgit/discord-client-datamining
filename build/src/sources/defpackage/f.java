package defpackage;

import kotlin.jvm.internal.Intrinsics;
/* renamed from: f  reason: default package */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class f extends Exception {

    /* renamed from: d  reason: collision with root package name */
    private final String f22197d;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public f(String message) {
        super(message);
        Intrinsics.checkNotNullParameter(message, "message");
        this.f22197d = message;
    }

    @Override // java.lang.Throwable
    public String getMessage() {
        return this.f22197d;
    }
}
