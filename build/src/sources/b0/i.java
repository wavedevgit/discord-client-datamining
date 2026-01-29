package b0;

import b0.h;
import com.facebook.react.views.text.internal.span.SetSpanOperation;
import java.io.BufferedOutputStream;
import java.io.FilterOutputStream;
import java.io.OutputStream;
import java.nio.ByteBuffer;
import java.nio.ByteOrder;
import java.util.HashMap;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class i extends FilterOutputStream {

    /* renamed from: r  reason: collision with root package name */
    private static final byte[] f7124r = "Exif\u0000\u0000".getBytes(g.f7091e);

    /* renamed from: d  reason: collision with root package name */
    private final h f7125d;

    /* renamed from: e  reason: collision with root package name */
    private final byte[] f7126e;

    /* renamed from: i  reason: collision with root package name */
    private final ByteBuffer f7127i;

    /* renamed from: o  reason: collision with root package name */
    private int f7128o;

    /* renamed from: p  reason: collision with root package name */
    private int f7129p;

    /* renamed from: q  reason: collision with root package name */
    private int f7130q;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {
        public static boolean a(short s10) {
            if (s10 >= -64 && s10 <= -49 && s10 != -60 && s10 != -56 && s10 != -52) {
                return true;
            }
            return false;
        }
    }

    public i(OutputStream outputStream, h hVar) {
        super(new BufferedOutputStream(outputStream, 65536));
        this.f7126e = new byte[1];
        this.f7127i = ByteBuffer.allocate(4);
        this.f7128o = 0;
        this.f7125d = hVar;
    }

    private int a(int i10, byte[] bArr, int i11, int i12) {
        int min = Math.min(i12, i10 - this.f7127i.position());
        this.f7127i.put(bArr, i11, min);
        return min;
    }

    private void h(b bVar) {
        j[] jVarArr;
        short s10;
        j[][] jVarArr2 = h.f7105i;
        int[] iArr = new int[jVarArr2.length];
        int[] iArr2 = new int[jVarArr2.length];
        for (j jVar : h.f7103g) {
            for (int i10 = 0; i10 < h.f7105i.length; i10++) {
                this.f7125d.c(i10).remove(jVar.f7132b);
            }
        }
        if (!this.f7125d.c(1).isEmpty()) {
            this.f7125d.c(0).put(h.f7103g[1].f7132b, g.f(0L, this.f7125d.d()));
        }
        if (!this.f7125d.c(2).isEmpty()) {
            this.f7125d.c(0).put(h.f7103g[2].f7132b, g.f(0L, this.f7125d.d()));
        }
        if (!this.f7125d.c(3).isEmpty()) {
            this.f7125d.c(1).put(h.f7103g[3].f7132b, g.f(0L, this.f7125d.d()));
        }
        for (int i11 = 0; i11 < h.f7105i.length; i11++) {
            int i12 = 0;
            for (Map.Entry entry : this.f7125d.c(i11).entrySet()) {
                int j10 = ((g) entry.getValue()).j();
                if (j10 > 4) {
                    i12 += j10;
                }
            }
            iArr2[i11] = iArr2[i11] + i12;
        }
        int i13 = 8;
        for (int i14 = 0; i14 < h.f7105i.length; i14++) {
            if (!this.f7125d.c(i14).isEmpty()) {
                iArr[i14] = i13;
                i13 += (this.f7125d.c(i14).size() * 12) + 6 + iArr2[i14];
            }
        }
        int i15 = i13 + 8;
        if (!this.f7125d.c(1).isEmpty()) {
            this.f7125d.c(0).put(h.f7103g[1].f7132b, g.f(iArr[1], this.f7125d.d()));
        }
        if (!this.f7125d.c(2).isEmpty()) {
            this.f7125d.c(0).put(h.f7103g[2].f7132b, g.f(iArr[2], this.f7125d.d()));
        }
        if (!this.f7125d.c(3).isEmpty()) {
            this.f7125d.c(1).put(h.f7103g[3].f7132b, g.f(iArr[3], this.f7125d.d()));
        }
        bVar.B(i15);
        bVar.write(f7124r);
        if (this.f7125d.d() == ByteOrder.BIG_ENDIAN) {
            s10 = 19789;
        } else {
            s10 = 18761;
        }
        bVar.n(s10);
        bVar.a(this.f7125d.d());
        bVar.B(42);
        bVar.x(8L);
        for (int i16 = 0; i16 < h.f7105i.length; i16++) {
            if (!this.f7125d.c(i16).isEmpty()) {
                bVar.B(this.f7125d.c(i16).size());
                int size = iArr[i16] + 2 + (this.f7125d.c(i16).size() * 12) + 4;
                for (Map.Entry entry2 : this.f7125d.c(i16).entrySet()) {
                    int i17 = ((j) b2.e.h((j) ((HashMap) h.b.f7113f.get(i16)).get(entry2.getKey()), "Tag not supported: " + ((String) entry2.getKey()) + ". Tag needs to be ported from ExifInterface to ExifData.")).f7131a;
                    g gVar = (g) entry2.getValue();
                    int j11 = gVar.j();
                    bVar.B(i17);
                    bVar.B(gVar.f7095a);
                    bVar.l(gVar.f7096b);
                    if (j11 > 4) {
                        bVar.x(size);
                        size += j11;
                    } else {
                        bVar.write(gVar.f7098d);
                        if (j11 < 4) {
                            while (j11 < 4) {
                                bVar.h(0);
                                j11++;
                            }
                        }
                    }
                }
                bVar.x(0L);
                for (Map.Entry entry3 : this.f7125d.c(i16).entrySet()) {
                    byte[] bArr = ((g) entry3.getValue()).f7098d;
                    if (bArr.length > 4) {
                        bVar.write(bArr, 0, bArr.length);
                    }
                }
            }
        }
        bVar.a(ByteOrder.BIG_ENDIAN);
    }

    /* JADX WARN: Code restructure failed: missing block: B:44:0x0108, code lost:
        if (r9 <= 0) goto L12;
     */
    /* JADX WARN: Code restructure failed: missing block: B:45:0x010a, code lost:
        ((java.io.FilterOutputStream) r6).out.write(r7, r8, r9);
     */
    /* JADX WARN: Code restructure failed: missing block: B:46:0x010f, code lost:
        return;
     */
    /* JADX WARN: Code restructure failed: missing block: B:60:?, code lost:
        return;
     */
    @Override // java.io.FilterOutputStream, java.io.OutputStream
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public void write(byte[] r7, int r8, int r9) {
        /*
            Method dump skipped, instructions count: 272
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: b0.i.write(byte[], int, int):void");
    }

    @Override // java.io.FilterOutputStream, java.io.OutputStream
    public void write(int i10) {
        byte[] bArr = this.f7126e;
        bArr[0] = (byte) (i10 & SetSpanOperation.SPAN_MAX_PRIORITY);
        write(bArr);
    }

    @Override // java.io.FilterOutputStream, java.io.OutputStream
    public void write(byte[] bArr) {
        write(bArr, 0, bArr.length);
    }
}
