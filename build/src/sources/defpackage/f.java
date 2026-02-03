package defpackage;

import kotlin.jvm.internal.Intrinsics;
/* renamed from: f  reason: default package */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class f extends Exception {

    /* renamed from: d  reason: collision with root package name */
    private final String f23279d;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public f(String message) {
        super(message);
        Intrinsics.checkNotNullParameter(message, "message");
        this.f23279d = message;
    }

    @Override // java.lang.Throwable
    public String getMessage() {
        return this.f23279d;
    }
}
