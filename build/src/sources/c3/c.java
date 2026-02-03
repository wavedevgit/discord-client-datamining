package c3;

import java.nio.ByteBuffer;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class c {

    /* renamed from: a  reason: collision with root package name */
    protected int f7967a;

    /* renamed from: b  reason: collision with root package name */
    protected ByteBuffer f7968b;

    /* renamed from: c  reason: collision with root package name */
    private int f7969c;

    /* renamed from: d  reason: collision with root package name */
    private int f7970d;

    /* renamed from: e  reason: collision with root package name */
    d f7971e = d.a();

    /* JADX INFO: Access modifiers changed from: protected */
    public int a(int i10) {
        return i10 + this.f7968b.getInt(i10);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public int b(int i10) {
        if (i10 < this.f7970d) {
            return this.f7968b.getShort(this.f7969c + i10);
        }
        return 0;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void c(int i10, ByteBuffer byteBuffer) {
        this.f7968b = byteBuffer;
        if (byteBuffer != null) {
            this.f7967a = i10;
            int i11 = i10 - byteBuffer.getInt(i10);
            this.f7969c = i11;
            this.f7970d = this.f7968b.getShort(i11);
            return;
        }
        this.f7967a = 0;
        this.f7969c = 0;
        this.f7970d = 0;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public int d(int i10) {
        int i11 = i10 + this.f7967a;
        return i11 + this.f7968b.getInt(i11) + 4;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public int e(int i10) {
        int i11 = i10 + this.f7967a;
        return this.f7968b.getInt(i11 + this.f7968b.getInt(i11));
    }
}
