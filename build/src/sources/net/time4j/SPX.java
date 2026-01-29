package net.time4j;

import java.io.DataInput;
import java.io.DataOutput;
import java.io.Externalizable;
import java.io.InvalidClassException;
import java.io.ObjectInput;
import java.io.ObjectOutput;
import java.io.StreamCorruptedException;
import java.util.ArrayList;
import java.util.Locale;
import java.util.Map;
import jt.l0;
import net.time4j.k;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class SPX implements Externalizable {
    private static final long serialVersionUID = 1;

    /* renamed from: d  reason: collision with root package name */
    private transient Object f40314d;

    /* renamed from: e  reason: collision with root package name */
    private transient int f40315e;

    public SPX() {
    }

    private f0 a(DataInput dataInput, byte b10) {
        int readByte;
        int i10 = b10 & 15;
        byte readByte2 = dataInput.readByte();
        int i11 = (readByte2 >> 5) & 3;
        int i12 = readByte2 & 31;
        if (i11 != 1) {
            if (i11 != 2) {
                if (i11 == 3) {
                    readByte = dataInput.readInt();
                } else {
                    throw new StreamCorruptedException("Unknown year range.");
                }
            } else {
                readByte = dataInput.readShort();
            }
        } else {
            readByte = dataInput.readByte() + 1978;
        }
        return f0.L0(readByte, b0.f(i10), i12);
    }

    private Object b(ObjectInput objectInput, byte b10) {
        boolean z10;
        Locale locale;
        if ((b10 & 1) == 1) {
            z10 = true;
        } else {
            z10 = false;
        }
        if ((b10 & 2) == 2) {
            return new k.b(z10, k.s((Map) objectInput.readObject()));
        }
        String readUTF = objectInput.readUTF();
        String readUTF2 = objectInput.readUTF();
        int indexOf = readUTF.indexOf("-");
        if (indexOf == -1) {
            locale = new Locale(readUTF);
        } else {
            locale = new Locale(readUTF.substring(0, indexOf), readUTF.substring(indexOf + 1));
        }
        return new k.b(z10, locale, readUTF2);
    }

    private Object c(ObjectInput objectInput, byte b10) {
        long readInt;
        boolean z10 = true;
        if ((b10 & 15) != 1) {
            z10 = false;
        }
        int readInt2 = objectInput.readInt();
        if (readInt2 == 0) {
            return n.j();
        }
        ArrayList arrayList = new ArrayList(readInt2);
        for (int i10 = 0; i10 < readInt2; i10++) {
            if (z10) {
                readInt = objectInput.readLong();
            } else {
                readInt = objectInput.readInt();
            }
            arrayList.add(l0.a.c(readInt, (w) objectInput.readObject()));
        }
        return new n(arrayList, objectInput.readBoolean());
    }

    private Object d(ObjectInput objectInput, byte b10) {
        qt.f fVar;
        int i10;
        if ((b10 & 1) == 1) {
            fVar = qt.f.UTC;
        } else {
            fVar = qt.f.POSIX;
        }
        long readLong = objectInput.readLong();
        if ((b10 & 2) == 2) {
            i10 = objectInput.readInt();
        } else {
            i10 = 0;
        }
        if (fVar == qt.f.UTC) {
            return y.k(readLong, i10);
        }
        return y.j(readLong, i10);
    }

    private Object e(DataInput dataInput, byte b10) {
        boolean z10;
        int i10 = b10 & 1;
        boolean z11 = true;
        int i11 = (b10 & 2) >>> 1;
        if (i10 != 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (i11 == 0) {
            z11 = false;
        }
        return a0.o0(dataInput, z10, z11);
    }

    /* JADX WARN: Multi-variable type inference failed */
    /* JADX WARN: Type inference failed for: r6v2, types: [int] */
    private g0 f(DataInput dataInput) {
        int readInt;
        byte readByte = dataInput.readByte();
        if (readByte < 0) {
            return g0.G0(~readByte);
        }
        int readByte2 = dataInput.readByte();
        byte b10 = 0;
        if (readByte2 < 0) {
            readByte2 = ~readByte2;
            readInt = 0;
        } else {
            byte readByte3 = dataInput.readByte();
            if (readByte3 < 0) {
                b10 = ~readByte3;
                readInt = 0;
            } else {
                readInt = dataInput.readInt();
                b10 = readByte3;
            }
        }
        return g0.J0(readByte, readByte2, b10, readInt);
    }

    private Object g(DataInput dataInput, byte b10) {
        return i0.b0(a(dataInput, b10), f(dataInput));
    }

    private Object h(DataInput dataInput, byte b10) {
        byte readByte = dataInput.readByte();
        y0 h10 = y0.h(readByte >> 4);
        int i10 = readByte & 15;
        y0 y0Var = y0.SATURDAY;
        y0 y0Var2 = y0.SUNDAY;
        if ((b10 & 15) == 1) {
            byte readByte2 = dataInput.readByte();
            y0Var = y0.h(readByte2 >> 4);
            y0Var2 = y0.h(readByte2 & 15);
        }
        return a1.l(h10, i10, y0Var, y0Var2);
    }

    private void i(DataOutput dataOutput) {
        j((f0) this.f40314d, 1, dataOutput);
    }

    private static void j(f0 f0Var, int i10, DataOutput dataOutput) {
        int i11;
        int f10 = f0Var.f();
        if (f10 >= 1850 && f10 <= 2100) {
            i11 = 1;
        } else if (Math.abs(f10) < 10000) {
            i11 = 2;
        } else {
            i11 = 3;
        }
        dataOutput.writeByte((i10 << 4) | f0Var.u());
        dataOutput.writeByte(f0Var.g() | (i11 << 5));
        if (i11 == 1) {
            dataOutput.writeByte(f10 - 1978);
        } else if (i11 == 2) {
            dataOutput.writeShort(f10);
        } else {
            dataOutput.writeInt(f10);
        }
    }

    private void k(ObjectOutput objectOutput) {
        int i10;
        k.b bVar = (k.b) k.b.class.cast(this.f40314d);
        Locale M = bVar.M();
        if (bVar.Q()) {
            i10 = 113;
        } else {
            i10 = 112;
        }
        if (M == null) {
            i10 |= 2;
        }
        objectOutput.writeByte(i10);
        if (M == null) {
            objectOutput.writeObject(bVar.J());
            return;
        }
        String language = M.getLanguage();
        if (!M.getCountry().isEmpty()) {
            language = language + "-" + M.getCountry();
        }
        objectOutput.writeUTF(language);
        objectOutput.writeUTF(bVar.G());
    }

    private void l(ObjectOutput objectOutput) {
        boolean z10;
        int i10;
        n nVar = (n) n.class.cast(this.f40314d);
        int size = nVar.a().size();
        int min = Math.min(size, 6);
        int i11 = 0;
        while (true) {
            if (i11 < min) {
                if (((l0.a) nVar.a().get(i11)).a() >= 1000) {
                    z10 = true;
                    break;
                }
                i11++;
            } else {
                z10 = false;
                break;
            }
        }
        if (z10) {
            i10 = 97;
        } else {
            i10 = 96;
        }
        objectOutput.writeByte(i10);
        objectOutput.writeInt(size);
        for (int i12 = 0; i12 < size; i12++) {
            l0.a aVar = (l0.a) nVar.a().get(i12);
            if (z10) {
                objectOutput.writeLong(aVar.a());
            } else {
                objectOutput.writeInt((int) aVar.a());
            }
            objectOutput.writeObject(aVar.b());
        }
        if (size > 0) {
            objectOutput.writeBoolean(nVar.i());
        }
    }

    private void m(ObjectOutput objectOutput) {
        int i10;
        y yVar = (y) y.class.cast(this.f40314d);
        if (yVar.g() == qt.f.UTC) {
            i10 = 81;
        } else {
            i10 = 80;
        }
        if (yVar.f() == 0) {
            objectOutput.writeByte(i10);
            objectOutput.writeLong(yVar.h());
            return;
        }
        objectOutput.writeByte(i10 | 2);
        objectOutput.writeLong(yVar.h());
        objectOutput.writeInt(yVar.f());
    }

    private void n(DataOutput dataOutput) {
        ((a0) this.f40314d).w0(dataOutput);
    }

    private void o(DataOutput dataOutput) {
        dataOutput.writeByte(32);
        p((g0) this.f40314d, dataOutput);
    }

    private static void p(g0 g0Var, DataOutput dataOutput) {
        if (g0Var.a() == 0) {
            if (g0Var.d() == 0) {
                if (g0Var.e() == 0) {
                    dataOutput.writeByte(~g0Var.h());
                    return;
                }
                dataOutput.writeByte(g0Var.h());
                dataOutput.writeByte(~g0Var.e());
                return;
            }
            dataOutput.writeByte(g0Var.h());
            dataOutput.writeByte(g0Var.e());
            dataOutput.writeByte(~g0Var.d());
            return;
        }
        dataOutput.writeByte(g0Var.h());
        dataOutput.writeByte(g0Var.e());
        dataOutput.writeByte(g0Var.d());
        dataOutput.writeInt(g0Var.a());
    }

    private void q(DataOutput dataOutput) {
        i0 i0Var = (i0) this.f40314d;
        j(i0Var.V(), 8, dataOutput);
        p(i0Var.X(), dataOutput);
    }

    private void r(DataOutput dataOutput) {
        boolean z10;
        int i10;
        a1 a1Var = (a1) this.f40314d;
        if (a1Var.h() == y0.SATURDAY && a1Var.e() == y0.SUNDAY) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (!z10) {
            i10 = 49;
        } else {
            i10 = 48;
        }
        dataOutput.writeByte(i10);
        dataOutput.writeByte((a1Var.f().d() << 4) | a1Var.g());
        if (!z10) {
            dataOutput.writeByte(a1Var.e().d() | (a1Var.h().d() << 4));
        }
    }

    private Object readResolve() {
        return this.f40314d;
    }

    @Override // java.io.Externalizable
    public void readExternal(ObjectInput objectInput) {
        byte readByte = objectInput.readByte();
        switch ((readByte & 255) >> 4) {
            case 1:
                this.f40314d = a(objectInput, readByte);
                return;
            case 2:
                this.f40314d = f(objectInput);
                return;
            case 3:
                this.f40314d = h(objectInput, readByte);
                return;
            case 4:
                this.f40314d = e(objectInput, readByte);
                return;
            case 5:
                this.f40314d = d(objectInput, readByte);
                return;
            case 6:
                this.f40314d = c(objectInput, readByte);
                return;
            case 7:
                this.f40314d = b(objectInput, readByte);
                return;
            case 8:
                this.f40314d = g(objectInput, readByte);
                return;
            default:
                throw new StreamCorruptedException("Unknown serialized type.");
        }
    }

    @Override // java.io.Externalizable
    public void writeExternal(ObjectOutput objectOutput) {
        switch (this.f40315e) {
            case 1:
                i(objectOutput);
                return;
            case 2:
                o(objectOutput);
                return;
            case 3:
                r(objectOutput);
                return;
            case 4:
                n(objectOutput);
                return;
            case 5:
                m(objectOutput);
                return;
            case 6:
                l(objectOutput);
                return;
            case 7:
                k(objectOutput);
                return;
            case 8:
                q(objectOutput);
                return;
            default:
                throw new InvalidClassException("Unknown serialized type.");
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public SPX(Object obj, int i10) {
        this.f40314d = obj;
        this.f40315e = i10;
    }
}
