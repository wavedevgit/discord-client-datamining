package c3;

import java.nio.ByteBuffer;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class c {

    /* renamed from: a  reason: collision with root package name */
    protected int f7316a;

    /* renamed from: b  reason: collision with root package name */
    protected ByteBuffer f7317b;

    /* renamed from: c  reason: collision with root package name */
    private int f7318c;

    /* renamed from: d  reason: collision with root package name */
    private int f7319d;

    /* renamed from: e  reason: collision with root package name */
    d f7320e = d.a();

    /* JADX INFO: Access modifiers changed from: protected */
    public int a(int i10) {
        return i10 + this.f7317b.getInt(i10);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public int b(int i10) {
        if (i10 < this.f7319d) {
            return this.f7317b.getShort(this.f7318c + i10);
        }
        return 0;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void c(int i10, ByteBuffer byteBuffer) {
        this.f7317b = byteBuffer;
        if (byteBuffer != null) {
            this.f7316a = i10;
            int i11 = i10 - byteBuffer.getInt(i10);
            this.f7318c = i11;
            this.f7319d = this.f7317b.getShort(i11);
            return;
        }
        this.f7316a = 0;
        this.f7318c = 0;
        this.f7319d = 0;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public int d(int i10) {
        int i11 = i10 + this.f7316a;
        return i11 + this.f7317b.getInt(i11) + 4;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public int e(int i10) {
        int i11 = i10 + this.f7316a;
        return this.f7317b.getInt(i11 + this.f7317b.getInt(i11));
    }
}
