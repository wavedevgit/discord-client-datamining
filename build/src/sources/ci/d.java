package ci;

import android.app.PendingIntent;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class d extends b {

    /* renamed from: d  reason: collision with root package name */
    private final PendingIntent f7621d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f7622e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public d(PendingIntent pendingIntent, boolean z10) {
        if (pendingIntent != null) {
            this.f7621d = pendingIntent;
            this.f7622e = z10;
            return;
        }
        throw new NullPointerException("Null pendingIntent");
    }

    @Override // ci.b
    final PendingIntent a() {
        return this.f7621d;
    }

    @Override // ci.b
    final boolean b() {
        return this.f7622e;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof b) {
            b bVar = (b) obj;
            if (this.f7621d.equals(bVar.a()) && this.f7622e == bVar.b()) {
                return true;
            }
        }
        return false;
    }

    public final int hashCode() {
        int i10;
        int hashCode = (this.f7621d.hashCode() ^ 1000003) * 1000003;
        if (true != this.f7622e) {
            i10 = 1237;
        } else {
            i10 = 1231;
        }
        return hashCode ^ i10;
    }

    public final String toString() {
        String obj = this.f7621d.toString();
        boolean z10 = this.f7622e;
        return "ReviewInfo{pendingIntent=" + obj + ", isNoOp=" + z10 + "}";
    }
}
