package b9;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a implements b {

    /* renamed from: a  reason: collision with root package name */
    public static final a f6428a = new a();

    private a() {
    }

    @Override // b9.b
    public boolean a(a9.a tag) {
        Intrinsics.checkNotNullParameter(tag, "tag");
        return false;
    }

    @Override // b9.b
    public void b(a9.a tag, String message) {
        Intrinsics.checkNotNullParameter(tag, "tag");
        Intrinsics.checkNotNullParameter(message, "message");
    }

    @Override // b9.b
    public void c(a9.a tag, String message, Object... args) {
        Intrinsics.checkNotNullParameter(tag, "tag");
        Intrinsics.checkNotNullParameter(message, "message");
        Intrinsics.checkNotNullParameter(args, "args");
    }
}
