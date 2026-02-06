package ub;

import java.io.Closeable;
import java.io.EOFException;
import java.io.File;
import java.io.FileInputStream;
import java.nio.ByteBuffer;
import java.nio.ByteOrder;
import java.nio.channels.FileChannel;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class i implements Closeable {

    /* renamed from: d  reason: collision with root package name */
    private final int f51284d = 1179403647;

    /* renamed from: e  reason: collision with root package name */
    private final FileChannel f51285e;

    public i(File file) {
        if (file != null && file.exists()) {
            this.f51285e = new FileInputStream(file).getChannel();
            return;
        }
        throw new IllegalArgumentException("File is null or does not exist");
    }

    private long a(d dVar, long j10, long j11) {
        for (long j12 = 0; j12 < j10; j12++) {
            e b10 = dVar.b(j12);
            if (b10.f51277a == 1) {
                long j13 = b10.f51279c;
                if (j13 <= j11 && j11 <= b10.f51280d + j13) {
                    return (j11 - j13) + b10.f51278b;
                }
            }
        }
        throw new IllegalStateException("Could not map vma to file offset!");
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        this.f51285e.close();
    }

    public d g() {
        boolean z10;
        this.f51285e.position(0L);
        ByteBuffer allocate = ByteBuffer.allocate(8);
        allocate.order(ByteOrder.LITTLE_ENDIAN);
        if (z(allocate, 0L) == 1179403647) {
            short n10 = n(allocate, 4L);
            if (n(allocate, 5L) == 2) {
                z10 = true;
            } else {
                z10 = false;
            }
            if (n10 == 1) {
                return new g(z10, this);
            }
            if (n10 == 2) {
                return new h(z10, this);
            }
            throw new IllegalStateException("Invalid class type!");
        }
        throw new IllegalArgumentException("Invalid ELF Magic!");
    }

    public List k() {
        ByteOrder byteOrder;
        long j10;
        long j11;
        this.f51285e.position(0L);
        ArrayList arrayList = new ArrayList();
        d g10 = g();
        ByteBuffer allocate = ByteBuffer.allocate(8);
        if (g10.f51268a) {
            byteOrder = ByteOrder.BIG_ENDIAN;
        } else {
            byteOrder = ByteOrder.LITTLE_ENDIAN;
        }
        allocate.order(byteOrder);
        long j12 = g10.f51273f;
        int i10 = 0;
        if (j12 == 65535) {
            j12 = g10.c(0).f51281a;
        }
        long j13 = 0;
        while (true) {
            j10 = 1;
            if (j13 < j12) {
                e b10 = g10.b(j13);
                if (b10.f51277a == 2) {
                    j11 = b10.f51278b;
                    break;
                }
                j13++;
            } else {
                j11 = 0;
                break;
            }
        }
        if (j11 == 0) {
            return Collections.unmodifiableList(arrayList);
        }
        ArrayList<Long> arrayList2 = new ArrayList();
        long j14 = 0;
        while (true) {
            c a10 = g10.a(j11, i10);
            long j15 = j10;
            long j16 = a10.f51266a;
            if (j16 == j15) {
                arrayList2.add(Long.valueOf(a10.f51267b));
            } else if (j16 == 5) {
                j14 = a10.f51267b;
            }
            i10++;
            if (a10.f51266a == 0) {
                break;
            }
            j10 = j15;
            j12 = j12;
        }
        if (j14 != 0) {
            long a11 = a(g10, j12, j14);
            for (Long l10 : arrayList2) {
                arrayList.add(y(allocate, l10.longValue() + a11));
            }
            return arrayList;
        }
        throw new IllegalStateException("String table offset not found!");
    }

    protected void m(ByteBuffer byteBuffer, long j10, int i10) {
        byteBuffer.position(0);
        byteBuffer.limit(i10);
        long j11 = 0;
        while (j11 < i10) {
            int read = this.f51285e.read(byteBuffer, j10 + j11);
            if (read != -1) {
                j11 += read;
            } else {
                throw new EOFException();
            }
        }
        byteBuffer.position(0);
    }

    protected short n(ByteBuffer byteBuffer, long j10) {
        m(byteBuffer, j10, 1);
        return (short) (byteBuffer.get() & 255);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public int p(ByteBuffer byteBuffer, long j10) {
        m(byteBuffer, j10, 2);
        return byteBuffer.getShort() & 65535;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public long s(ByteBuffer byteBuffer, long j10) {
        m(byteBuffer, j10, 8);
        return byteBuffer.getLong();
    }

    protected String y(ByteBuffer byteBuffer, long j10) {
        StringBuilder sb2 = new StringBuilder();
        while (true) {
            long j11 = 1 + j10;
            short n10 = n(byteBuffer, j10);
            if (n10 != 0) {
                sb2.append((char) n10);
                j10 = j11;
            } else {
                return sb2.toString();
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public long z(ByteBuffer byteBuffer, long j10) {
        m(byteBuffer, j10, 4);
        return byteBuffer.getInt() & 4294967295L;
    }
}
