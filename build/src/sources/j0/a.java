package j0;

import androidx.concurrent.futures.c;
import j0.t;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class a extends t.b {

    /* renamed from: a  reason: collision with root package name */
    private final int f30575a;

    /* renamed from: b  reason: collision with root package name */
    private final int f30576b;

    /* renamed from: c  reason: collision with root package name */
    private final c.a f30577c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public a(int i10, int i11, c.a aVar) {
        this.f30575a = i10;
        this.f30576b = i11;
        if (aVar != null) {
            this.f30577c = aVar;
            return;
        }
        throw new NullPointerException("Null completer");
    }

    @Override // j0.t.b
    c.a a() {
        return this.f30577c;
    }

    @Override // j0.t.b
    int b() {
        return this.f30575a;
    }

    @Override // j0.t.b
    int c() {
        return this.f30576b;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof t.b) {
            t.b bVar = (t.b) obj;
            if (this.f30575a == bVar.b() && this.f30576b == bVar.c() && this.f30577c.equals(bVar.a())) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((((this.f30575a ^ 1000003) * 1000003) ^ this.f30576b) * 1000003) ^ this.f30577c.hashCode();
    }

    public String toString() {
        return "PendingSnapshot{jpegQuality=" + this.f30575a + ", rotationDegrees=" + this.f30576b + ", completer=" + this.f30577c + "}";
    }
}
