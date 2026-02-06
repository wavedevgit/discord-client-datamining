package di;

import android.app.PendingIntent;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class d extends b {

    /* renamed from: d  reason: collision with root package name */
    private final PendingIntent f20768d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f20769e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public d(PendingIntent pendingIntent, boolean z10) {
        if (pendingIntent != null) {
            this.f20768d = pendingIntent;
            this.f20769e = z10;
            return;
        }
        throw new NullPointerException("Null pendingIntent");
    }

    @Override // di.b
    final PendingIntent a() {
        return this.f20768d;
    }

    @Override // di.b
    final boolean b() {
        return this.f20769e;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof b) {
            b bVar = (b) obj;
            if (this.f20768d.equals(bVar.a()) && this.f20769e == bVar.b()) {
                return true;
            }
        }
        return false;
    }

    public final int hashCode() {
        int i10;
        int hashCode = (this.f20768d.hashCode() ^ 1000003) * 1000003;
        if (true != this.f20769e) {
            i10 = 1237;
        } else {
            i10 = 1231;
        }
        return hashCode ^ i10;
    }

    public final String toString() {
        String obj = this.f20768d.toString();
        boolean z10 = this.f20769e;
        return "ReviewInfo{pendingIntent=" + obj + ", isNoOp=" + z10 + "}";
    }
}
