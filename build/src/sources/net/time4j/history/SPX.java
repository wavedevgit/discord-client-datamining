package net.time4j.history;

import java.io.DataInput;
import java.io.DataOutput;
import java.io.Externalizable;
import java.io.InvalidClassException;
import java.io.ObjectInput;
import java.io.ObjectOutput;
import java.io.StreamCorruptedException;
import net.time4j.f0;
import rt.a0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class SPX implements Externalizable {

    /* renamed from: i  reason: collision with root package name */
    private static final int[] f39404i = new int[0];
    private static final long serialVersionUID = 1;

    /* renamed from: d  reason: collision with root package name */
    private transient Object f39405d;

    /* renamed from: e  reason: collision with root package name */
    private transient int f39406e;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f39407a;

        static {
            int[] iArr = new int[wt.b.values().length];
            f39407a = iArr;
            try {
                iArr[wt.b.PROLEPTIC_GREGORIAN.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f39407a[wt.b.PROLEPTIC_JULIAN.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f39407a[wt.b.PROLEPTIC_BYZANTINE.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                f39407a[wt.b.SWEDEN.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                f39407a[wt.b.INTRODUCTION_ON_1582_10_15.ordinal()] = 5;
            } catch (NoSuchFieldError unused5) {
            }
        }
    }

    public SPX() {
    }

    private static wt.b a(int i10) {
        wt.b[] values;
        for (wt.b bVar : wt.b.values()) {
            if (bVar.a() == i10) {
                return bVar;
            }
        }
        throw new StreamCorruptedException("Unknown variant of chronological history.");
    }

    private d b(DataInput dataInput, byte b10) {
        int i10 = a.f39407a[a(b10 & 15).ordinal()];
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 != 3) {
                    if (i10 != 4) {
                        if (i10 != 5) {
                            return d.G(f0.M0(dataInput.readLong(), a0.MODIFIED_JULIAN_DATE));
                        }
                        return d.E();
                    }
                    return d.H();
                }
                return d.D;
            }
            return d.C;
        }
        return d.B;
    }

    private static net.time4j.history.a c(DataInput dataInput) {
        int readInt = dataInput.readInt();
        if (readInt > 0) {
            int[] iArr = new int[readInt];
            for (int i10 = 0; i10 < readInt; i10++) {
                iArr[i10] = 1 - dataInput.readInt();
            }
            return net.time4j.history.a.f(iArr);
        }
        return null;
    }

    private void d(DataOutput dataOutput) {
        int[] iArr;
        d dVar = (d) this.f39405d;
        dataOutput.writeByte(dVar.s().a() | (this.f39406e << 4));
        if (dVar.s() == wt.b.SINGLE_CUTOVER_DATE) {
            dataOutput.writeLong(((f) dVar.p().get(0)).f39440a);
        }
        if (dVar.x()) {
            iArr = dVar.l().e();
        } else {
            iArr = f39404i;
        }
        dataOutput.writeInt(iArr.length);
        for (int i10 : iArr) {
            dataOutput.writeInt(i10);
        }
        dVar.v().g(dataOutput);
        dVar.o().h(dataOutput);
    }

    private Object readResolve() {
        return this.f39405d;
    }

    @Override // java.io.Externalizable
    public void readExternal(ObjectInput objectInput) {
        d b10;
        byte readByte = objectInput.readByte();
        int i10 = (readByte & 255) >> 4;
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 == 3) {
                    d b11 = b(objectInput, readByte);
                    net.time4j.history.a c10 = c(objectInput);
                    if (c10 != null) {
                        b11 = b11.I(c10);
                    }
                    b10 = b11.K(o.e(objectInput)).J(g.g(objectInput));
                } else {
                    throw new StreamCorruptedException("Unknown serialized type.");
                }
            } else {
                d b12 = b(objectInput, readByte);
                net.time4j.history.a c11 = c(objectInput);
                if (c11 != null) {
                    b10 = b12.I(c11);
                } else {
                    b10 = b12;
                }
            }
        } else {
            b10 = b(objectInput, readByte);
        }
        this.f39405d = b10;
    }

    @Override // java.io.Externalizable
    public void writeExternal(ObjectOutput objectOutput) {
        int i10 = this.f39406e;
        if (i10 != 1 && i10 != 2 && i10 != 3) {
            throw new InvalidClassException("Unknown serialized type.");
        }
        d(objectOutput);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public SPX(Object obj, int i10) {
        this.f39405d = obj;
        this.f39406e = i10;
    }
}
