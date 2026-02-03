package com.google.android.gms.internal.fido;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class f3 {

    /* renamed from: b  reason: collision with root package name */
    static final f3 f13607b = new f3(new a("Failure occurred while trying to finish a future."));

    /* renamed from: a  reason: collision with root package name */
    final Throwable f13608a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class a extends Throwable {
        a(String str) {
            super("Failure occurred while trying to finish a future.");
        }

        @Override // java.lang.Throwable
        public final synchronized Throwable fillInStackTrace() {
            return this;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public f3(Throwable th2) {
        th2.getClass();
        this.f13608a = th2;
    }
}
