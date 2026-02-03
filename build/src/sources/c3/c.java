package c3;

import java.nio.ByteBuffer;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class c {

    /* renamed from: a  reason: collision with root package name */
    protected int f6954a;

    /* renamed from: b  reason: collision with root package name */
    protected ByteBuffer f6955b;

    /* renamed from: c  reason: collision with root package name */
    private int f6956c;

    /* renamed from: d  reason: collision with root package name */
    private int f6957d;

    /* renamed from: e  reason: collision with root package name */
    d f6958e = d.a();

    /* JADX INFO: Access modifiers changed from: protected */
    public int a(int i10) {
        return i10 + this.f6955b.getInt(i10);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public int b(int i10) {
        if (i10 < this.f6957d) {
            return this.f6955b.getShort(this.f6956c + i10);
        }
        return 0;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void c(int i10, ByteBuffer byteBuffer) {
        this.f6955b = byteBuffer;
        if (byteBuffer != null) {
            this.f6954a = i10;
            int i11 = i10 - byteBuffer.getInt(i10);
            this.f6956c = i11;
            this.f6957d = this.f6955b.getShort(i11);
            return;
        }
        this.f6954a = 0;
        this.f6956c = 0;
        this.f6957d = 0;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public int d(int i10) {
        int i11 = i10 + this.f6954a;
        return i11 + this.f6955b.getInt(i11) + 4;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public int e(int i10) {
        int i11 = i10 + this.f6954a;
        return this.f6955b.getInt(i11 + this.f6955b.getInt(i11));
    }
}
