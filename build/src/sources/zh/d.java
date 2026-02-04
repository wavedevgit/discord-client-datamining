package zh;

import android.app.PendingIntent;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class d extends b {

    /* renamed from: d  reason: collision with root package name */
    private final PendingIntent f55962d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f55963e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public d(PendingIntent pendingIntent, boolean z10) {
        if (pendingIntent != null) {
            this.f55962d = pendingIntent;
            this.f55963e = z10;
            return;
        }
        throw new NullPointerException("Null pendingIntent");
    }

    @Override // zh.b
    final PendingIntent a() {
        return this.f55962d;
    }

    @Override // zh.b
    final boolean b() {
        return this.f55963e;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof b) {
            b bVar = (b) obj;
            if (this.f55962d.equals(bVar.a()) && this.f55963e == bVar.b()) {
                return true;
            }
        }
        return false;
    }

    public final int hashCode() {
        int i10;
        int hashCode = (this.f55962d.hashCode() ^ 1000003) * 1000003;
        if (true != this.f55963e) {
            i10 = 1237;
        } else {
            i10 = 1231;
        }
        return hashCode ^ i10;
    }

    public final String toString() {
        String obj = this.f55962d.toString();
        boolean z10 = this.f55963e;
        return "ReviewInfo{pendingIntent=" + obj + ", isNoOp=" + z10 + "}";
    }
}
