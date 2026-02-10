package gi;

import android.app.PendingIntent;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class d extends b {

    /* renamed from: d  reason: collision with root package name */
    private final PendingIntent f25703d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f25704e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public d(PendingIntent pendingIntent, boolean z10) {
        if (pendingIntent != null) {
            this.f25703d = pendingIntent;
            this.f25704e = z10;
            return;
        }
        throw new NullPointerException("Null pendingIntent");
    }

    @Override // gi.b
    final PendingIntent a() {
        return this.f25703d;
    }

    @Override // gi.b
    final boolean b() {
        return this.f25704e;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof b) {
            b bVar = (b) obj;
            if (this.f25703d.equals(bVar.a()) && this.f25704e == bVar.b()) {
                return true;
            }
        }
        return false;
    }

    public final int hashCode() {
        int i10;
        int hashCode = (this.f25703d.hashCode() ^ 1000003) * 1000003;
        if (true != this.f25704e) {
            i10 = 1237;
        } else {
            i10 = 1231;
        }
        return hashCode ^ i10;
    }

    public final String toString() {
        String obj = this.f25703d.toString();
        boolean z10 = this.f25704e;
        return "ReviewInfo{pendingIntent=" + obj + ", isNoOp=" + z10 + "}";
    }
}
