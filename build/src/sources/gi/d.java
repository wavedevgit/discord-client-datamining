package gi;

import android.app.PendingIntent;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class d extends b {

    /* renamed from: d  reason: collision with root package name */
    private final PendingIntent f25704d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f25705e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public d(PendingIntent pendingIntent, boolean z10) {
        if (pendingIntent != null) {
            this.f25704d = pendingIntent;
            this.f25705e = z10;
            return;
        }
        throw new NullPointerException("Null pendingIntent");
    }

    @Override // gi.b
    final PendingIntent a() {
        return this.f25704d;
    }

    @Override // gi.b
    final boolean b() {
        return this.f25705e;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof b) {
            b bVar = (b) obj;
            if (this.f25704d.equals(bVar.a()) && this.f25705e == bVar.b()) {
                return true;
            }
        }
        return false;
    }

    public final int hashCode() {
        int i10;
        int hashCode = (this.f25704d.hashCode() ^ 1000003) * 1000003;
        if (true != this.f25705e) {
            i10 = 1237;
        } else {
            i10 = 1231;
        }
        return hashCode ^ i10;
    }

    public final String toString() {
        String obj = this.f25704d.toString();
        boolean z10 = this.f25705e;
        return "ReviewInfo{pendingIntent=" + obj + ", isNoOp=" + z10 + "}";
    }
}
