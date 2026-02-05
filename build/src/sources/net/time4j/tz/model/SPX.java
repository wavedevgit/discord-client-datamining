package net.time4j.tz.model;

import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.facebook.react.views.text.internal.span.SetSpanOperation;
import java.io.DataInput;
import java.io.DataOutput;
import java.io.Externalizable;
import java.io.InvalidClassException;
import java.io.InvalidObjectException;
import java.io.ObjectInput;
import java.io.ObjectOutput;
import java.io.StreamCorruptedException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Iterator;
import java.util.List;
import net.time4j.b0;
import net.time4j.g0;
import net.time4j.tz.p;
import net.time4j.tz.q;
import net.time4j.y0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class SPX implements Externalizable {
    private static final long serialVersionUID = 6526945678752534989L;

    /* renamed from: d  reason: collision with root package name */
    private transient Object f40239d;

    /* renamed from: e  reason: collision with root package name */
    private transient int f40240e;

    public SPX() {
    }

    private static Object a(ObjectInput objectInput) {
        return new a(j(objectInput), false, false);
    }

    private static Object b(ObjectInput objectInput) {
        List j10 = j(objectInput);
        return l.g(p.t(((q) j10.get(0)).h()), j10, h(objectInput), false, false);
    }

    private static d c(DataInput dataInput) {
        int i10;
        byte readByte = dataInput.readByte();
        b0 f10 = b0.f((readByte & 255) >>> 4);
        int i11 = readByte & 15;
        i iVar = i.f40263o[i11 % 3];
        int i12 = i(i11);
        byte readByte2 = dataInput.readByte();
        int i13 = (readByte2 & 255) >>> 3;
        y0 h10 = y0.h(readByte2 & 7);
        byte readByte3 = dataInput.readByte();
        boolean z10 = true;
        if (((readByte3 & 255) >>> 7) != 1) {
            z10 = false;
        }
        boolean z11 = z10;
        int i14 = readByte3 & 63;
        if (i12 == -1) {
            i12 = f(dataInput);
        }
        int i15 = i12;
        if (i14 == 63) {
            i10 = dataInput.readInt();
        } else {
            i10 = i14 * 1800;
        }
        return new c(f10, i13, h10, i10, iVar, i15, z11);
    }

    private static d d(DataInput dataInput) {
        byte readByte = dataInput.readByte();
        int i10 = (readByte & 255) >>> 4;
        int i11 = readByte & 15;
        i iVar = i.f40263o[i11 % 3];
        int i12 = i(i11);
        byte readByte2 = dataInput.readByte();
        int i13 = (readByte2 & 255) >>> 3;
        int n10 = n(readByte2 & 7);
        if (i12 == -1) {
            i12 = f(dataInput);
        }
        int i14 = i12;
        if (n10 == -1) {
            n10 = dataInput.readInt();
        }
        return new f(b0.f(i10), i13, n10, iVar, i14);
    }

    private static d e(DataInput dataInput) {
        int i10;
        byte readByte = dataInput.readByte();
        b0 f10 = b0.f((readByte & 255) >>> 4);
        int i11 = readByte & 15;
        i iVar = i.f40263o[i11 % 3];
        int i12 = i(i11);
        byte readByte2 = dataInput.readByte();
        y0 h10 = y0.h((readByte2 & 255) >>> 5);
        int i13 = readByte2 & 31;
        if (i12 == -1) {
            i12 = f(dataInput);
        }
        int i14 = i12;
        if (i13 == 31) {
            i10 = dataInput.readInt();
        } else {
            i10 = i13 * 3600;
        }
        return new h(f10, h10, i10, iVar, i14);
    }

    private static int f(DataInput dataInput) {
        byte readByte = dataInput.readByte();
        if (readByte == Byte.MAX_VALUE) {
            return dataInput.readInt();
        }
        return readByte * 900;
    }

    private static Object g(ObjectInput objectInput) {
        int readByte;
        long readByte2;
        if ((objectInput.readByte() & 255) == 255) {
            readByte2 = objectInput.readLong();
        } else {
            readByte2 = ((((readByte << 16) + ((objectInput.readByte() & 255) << 8)) + (255 & objectInput.readByte())) * 900) - 4575744000L;
        }
        return new j(new q(readByte2, f(objectInput), f(objectInput), f(objectInput)), h(objectInput), false);
    }

    private static List h(ObjectInput objectInput) {
        d d10;
        byte readByte = objectInput.readByte();
        if (readByte == 0) {
            return Collections.EMPTY_LIST;
        }
        ArrayList arrayList = new ArrayList(readByte);
        d dVar = null;
        int i10 = 0;
        while (i10 < readByte) {
            switch (objectInput.readByte()) {
                case 120:
                    d10 = d(objectInput);
                    break;
                case 121:
                    d10 = c(objectInput);
                    break;
                case 122:
                    d10 = e(objectInput);
                    break;
                default:
                    d10 = (d) objectInput.readObject();
                    break;
            }
            if (dVar != null && k.INSTANCE.compare(dVar, d10) >= 0) {
                throw new InvalidObjectException("Order of daylight saving rules is not ascending.");
            }
            arrayList.add(d10);
            i10++;
            dVar = d10;
        }
        return arrayList;
    }

    private static int i(int i10) {
        int i11 = i10 / 3;
        if (i11 != 0) {
            if (i11 != 1) {
                if (i11 != 2) {
                    if (i11 != 3) {
                        return -1;
                    }
                    return 7200;
                }
                return 3600;
            }
            return 1800;
        }
        return 0;
    }

    private static List j(ObjectInput objectInput) {
        boolean z10;
        long j10;
        long readByte;
        int i10;
        int i11;
        int readInt = objectInput.readInt();
        if (readInt == 0) {
            return Collections.EMPTY_LIST;
        }
        ArrayList arrayList = new ArrayList(readInt);
        int f10 = f(objectInput);
        long j11 = Long.MIN_VALUE;
        int i12 = f10;
        int i13 = 0;
        while (i13 < readInt) {
            byte readByte2 = objectInput.readByte();
            if (readByte2 < 0) {
                z10 = true;
            } else {
                z10 = false;
            }
            int i14 = (readByte2 >>> 5) & 3;
            int o10 = o((readByte2 >>> 2) & 7);
            if (o10 == -1) {
                readByte = objectInput.readLong();
                j10 = j11;
            } else {
                j10 = j11;
                readByte = ((((((((readByte2 & 3) << 16) | ((objectInput.readByte() & 255) << 8)) | (objectInput.readByte() & 255)) * 86400) - 4575744000L) + o10) - 7200) - f10;
            }
            long j12 = readByte;
            if (j12 > j10) {
                if (i14 != 1) {
                    if (i14 != 2) {
                        if (i14 != 3) {
                            i10 = f(objectInput);
                        } else {
                            i10 = 7200;
                        }
                    } else {
                        i10 = 3600;
                    }
                } else {
                    i10 = 0;
                }
                if (z10) {
                    f10 = f(objectInput);
                }
                if (i10 == Integer.MAX_VALUE) {
                    i11 = 0;
                } else {
                    i11 = i10;
                }
                int i15 = f10 + i11;
                arrayList.add(new q(j12, i12, i15, i10));
                i13++;
                j11 = j12;
                i12 = i15;
            } else {
                throw new StreamCorruptedException("Wrong order of transitions.");
            }
        }
        return arrayList;
    }

    private static int k(int i10) {
        if (i10 != 0) {
            if (i10 != 3600) {
                if (i10 != 7200) {
                    if (i10 != 10800) {
                        if (i10 != 79200) {
                            if (i10 != 82800) {
                                return i10 != 86400 ? 0 : 7;
                            }
                            return 6;
                        }
                        return 5;
                    }
                    return 4;
                }
                return 3;
            }
            return 2;
        }
        return 1;
    }

    private static int l(int i10) {
        if (i10 != 0) {
            if (i10 != 60) {
                if (i10 != 3600) {
                    if (i10 != 7200) {
                        if (i10 != 10800) {
                            if (i10 != 14400) {
                                return i10 != 18000 ? 0 : 7;
                            }
                            return 6;
                        }
                        return 5;
                    }
                    return 4;
                }
                return 3;
            }
            return 2;
        }
        return 1;
    }

    private static int m(g gVar) {
        return gVar.f().r(g0.K) + nt.c.g(gVar.c() * 86400);
    }

    private static int n(int i10) {
        switch (i10) {
            case 1:
                return 0;
            case 2:
                return 3600;
            case 3:
                return 7200;
            case 4:
                return 10800;
            case 5:
                return 79200;
            case 6:
                return 82800;
            case 7:
                return 86400;
            default:
                return -1;
        }
    }

    private static int o(int i10) {
        switch (i10) {
            case 1:
                return 0;
            case 2:
                return 60;
            case 3:
                return 3600;
            case 4:
                return 7200;
            case 5:
                return 10800;
            case 6:
                return 14400;
            case 7:
                return 18000;
            default:
                return -1;
        }
    }

    private static void p(Object obj, ObjectOutput objectOutput) {
        ((a) obj).u(objectOutput);
    }

    private static void q(Object obj, ObjectOutput objectOutput) {
        b bVar = (b) obj;
        bVar.l(objectOutput);
        x(bVar.k(), objectOutput);
    }

    private static void r(Object obj, DataOutput dataOutput) {
        int i10;
        int i11;
        c cVar = (c) obj;
        boolean u10 = u(cVar, dataOutput);
        dataOutput.writeByte(((cVar.m() << 3) | cVar.n()) & SetSpanOperation.SPAN_MAX_PRIORITY);
        boolean z10 = false;
        if (cVar.o()) {
            i10 = IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        } else {
            i10 = 0;
        }
        int m10 = m(cVar);
        if (m10 % 1800 == 0) {
            i11 = i10 | (m10 / 1800);
            z10 = true;
        } else {
            i11 = i10 | 63;
        }
        dataOutput.writeByte(i11 & SetSpanOperation.SPAN_MAX_PRIORITY);
        if (!u10) {
            v(dataOutput, cVar.e());
        }
        if (!z10) {
            dataOutput.writeInt(m10);
        }
    }

    private Object readResolve() {
        return this.f40239d;
    }

    private static void s(Object obj, DataOutput dataOutput) {
        f fVar = (f) obj;
        boolean u10 = u(fVar, dataOutput);
        int m10 = m(fVar);
        int k10 = k(m10);
        dataOutput.writeByte(((fVar.m() << 3) | k10) & SetSpanOperation.SPAN_MAX_PRIORITY);
        if (!u10) {
            v(dataOutput, fVar.e());
        }
        if (k10 == 0) {
            dataOutput.writeInt(m10);
        }
    }

    private static void t(Object obj, DataOutput dataOutput) {
        int i10;
        boolean z10;
        h hVar = (h) obj;
        boolean u10 = u(hVar, dataOutput);
        int m10 = hVar.m() << 5;
        int m11 = m(hVar);
        if (m11 % 3600 == 0) {
            i10 = m10 | (m11 / 3600);
            z10 = true;
        } else {
            i10 = m10 | 31;
            z10 = false;
        }
        dataOutput.writeByte(i10 & SetSpanOperation.SPAN_MAX_PRIORITY);
        if (!u10) {
            v(dataOutput, hVar.e());
        }
        if (!z10) {
            dataOutput.writeInt(m11);
        }
    }

    private static boolean u(g gVar, DataOutput dataOutput) {
        int i10;
        int k10 = gVar.k() << 4;
        int ordinal = gVar.d().ordinal();
        int e10 = gVar.e();
        boolean z10 = true;
        if (e10 != 0) {
            if (e10 != 1800) {
                if (e10 != 3600) {
                    if (e10 != 7200) {
                        i10 = k10 | (ordinal + 12);
                        z10 = false;
                        dataOutput.writeByte(i10 & SetSpanOperation.SPAN_MAX_PRIORITY);
                        return z10;
                    }
                    ordinal += 9;
                } else {
                    ordinal += 6;
                }
            } else {
                ordinal += 3;
            }
        }
        i10 = k10 | ordinal;
        dataOutput.writeByte(i10 & SetSpanOperation.SPAN_MAX_PRIORITY);
        return z10;
    }

    private static void v(DataOutput dataOutput, int i10) {
        if (i10 % 900 == 0) {
            dataOutput.writeByte(i10 / 900);
            return;
        }
        dataOutput.writeByte(127);
        dataOutput.writeInt(i10);
    }

    private static void w(Object obj, ObjectOutput objectOutput) {
        j jVar = (j) obj;
        q l10 = jVar.l();
        long g10 = l10.g();
        if (g10 >= -4575744000L && g10 < 10464767099L && g10 % 900 == 0) {
            int i10 = (int) ((g10 - (-4575744000L)) / 900);
            objectOutput.writeByte((i10 >>> 16) & SetSpanOperation.SPAN_MAX_PRIORITY);
            objectOutput.writeByte((i10 >>> 8) & SetSpanOperation.SPAN_MAX_PRIORITY);
            objectOutput.writeByte(i10 & SetSpanOperation.SPAN_MAX_PRIORITY);
        } else {
            objectOutput.writeByte(SetSpanOperation.SPAN_MAX_PRIORITY);
            objectOutput.writeLong(l10.g());
        }
        v(objectOutput, l10.h());
        v(objectOutput, l10.l());
        v(objectOutput, l10.f());
        x(jVar.n(), objectOutput);
    }

    private static void x(List list, ObjectOutput objectOutput) {
        objectOutput.writeByte(list.size());
        Iterator it = list.iterator();
        while (it.hasNext()) {
            d dVar = (d) it.next();
            objectOutput.writeByte(dVar.g());
            switch (dVar.g()) {
                case 120:
                    s(dVar, objectOutput);
                    break;
                case 121:
                    r(dVar, objectOutput);
                    break;
                case 122:
                    t(dVar, objectOutput);
                    break;
                default:
                    objectOutput.writeObject(dVar);
                    break;
            }
        }
    }

    private static int y(q qVar, int i10, DataOutput dataOutput) {
        boolean z10;
        byte b10;
        int k10 = qVar.k();
        int i11 = 1;
        int i12 = 0;
        if (k10 != i10) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (z10) {
            b10 = (byte) IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        } else {
            b10 = 0;
        }
        int f10 = qVar.f();
        if (f10 != 0) {
            if (f10 != 3600) {
                if (f10 != 7200) {
                    i11 = 0;
                } else {
                    i11 = 3;
                }
            } else {
                i11 = 2;
            }
        }
        byte b11 = (byte) (b10 | (i11 << 5));
        long g10 = qVar.g() + i10;
        long j10 = 7200 + g10;
        if (j10 >= -4575744000L && j10 < 18067104000L) {
            i12 = l(nt.c.d(j10, 86400));
        }
        byte b12 = (byte) ((i12 << 2) | b11);
        if (i12 == 0) {
            dataOutput.writeByte(b12);
            dataOutput.writeLong(qVar.g());
        } else {
            int i13 = (int) ((g10 + 4575751200L) / 86400);
            dataOutput.writeByte((byte) (b12 | ((byte) ((i13 >>> 16) & 3))));
            dataOutput.writeByte((i13 >>> 8) & SetSpanOperation.SPAN_MAX_PRIORITY);
            dataOutput.writeByte(i13 & SetSpanOperation.SPAN_MAX_PRIORITY);
        }
        if (i11 == 0) {
            v(dataOutput, f10);
        }
        if (z10) {
            v(dataOutput, k10);
        }
        return k10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static void z(q[] qVarArr, int i10, DataOutput dataOutput) {
        int min = Math.min(i10, qVarArr.length);
        dataOutput.writeInt(min);
        if (min > 0) {
            int h10 = qVarArr[0].h();
            v(dataOutput, h10);
            for (int i11 = 0; i11 < min; i11++) {
                h10 = y(qVarArr[i11], h10, dataOutput);
            }
        }
    }

    @Override // java.io.Externalizable
    public void readExternal(ObjectInput objectInput) {
        switch (objectInput.readByte()) {
            case 120:
                this.f40239d = d(objectInput);
                return;
            case 121:
                this.f40239d = c(objectInput);
                return;
            case 122:
                this.f40239d = e(objectInput);
                return;
            case 123:
            case 124:
            default:
                throw new StreamCorruptedException("Unknown serialized type.");
            case 125:
                this.f40239d = g(objectInput);
                return;
            case 126:
                this.f40239d = a(objectInput);
                return;
            case Byte.MAX_VALUE:
                this.f40239d = b(objectInput);
                return;
        }
    }

    @Override // java.io.Externalizable
    public void writeExternal(ObjectOutput objectOutput) {
        objectOutput.writeByte(this.f40240e);
        switch (this.f40240e) {
            case 120:
                s(this.f40239d, objectOutput);
                return;
            case 121:
                r(this.f40239d, objectOutput);
                return;
            case 122:
                t(this.f40239d, objectOutput);
                return;
            case 123:
            case 124:
            default:
                throw new InvalidClassException("Unknown serialized type.");
            case 125:
                w(this.f40239d, objectOutput);
                return;
            case 126:
                p(this.f40239d, objectOutput);
                return;
            case 127:
                q(this.f40239d, objectOutput);
                return;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public SPX(Object obj, int i10) {
        this.f40239d = obj;
        this.f40240e = i10;
    }
}
