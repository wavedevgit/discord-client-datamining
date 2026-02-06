package j0;

import androidx.concurrent.futures.c;
import j0.t;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class a extends t.b {

    /* renamed from: a  reason: collision with root package name */
    private final int f29548a;

    /* renamed from: b  reason: collision with root package name */
    private final int f29549b;

    /* renamed from: c  reason: collision with root package name */
    private final c.a f29550c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public a(int i10, int i11, c.a aVar) {
        this.f29548a = i10;
        this.f29549b = i11;
        if (aVar != null) {
            this.f29550c = aVar;
            return;
        }
        throw new NullPointerException("Null completer");
    }

    @Override // j0.t.b
    c.a a() {
        return this.f29550c;
    }

    @Override // j0.t.b
    int b() {
        return this.f29548a;
    }

    @Override // j0.t.b
    int c() {
        return this.f29549b;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof t.b) {
            t.b bVar = (t.b) obj;
            if (this.f29548a == bVar.b() && this.f29549b == bVar.c() && this.f29550c.equals(bVar.a())) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((((this.f29548a ^ 1000003) * 1000003) ^ this.f29549b) * 1000003) ^ this.f29550c.hashCode();
    }

    public String toString() {
        return "PendingSnapshot{jpegQuality=" + this.f29548a + ", rotationDegrees=" + this.f29549b + ", completer=" + this.f29550c + "}";
    }
}
