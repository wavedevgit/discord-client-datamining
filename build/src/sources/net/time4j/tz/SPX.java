package net.time4j.tz;

import java.io.Externalizable;
import java.io.InvalidClassException;
import java.io.ObjectInput;
import java.io.ObjectOutput;
import java.io.StreamCorruptedException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class SPX implements Externalizable {
    private static final long serialVersionUID = -1000776907354520172L;

    /* renamed from: d  reason: collision with root package name */
    private transient Object f39604d;

    /* renamed from: e  reason: collision with root package name */
    private transient int f39605e;

    public SPX() {
    }

    private Object a(ObjectInput objectInput, byte b10) {
        return new a((k) objectInput.readObject(), (l) objectInput.readObject());
    }

    private Object b(ObjectInput objectInput, byte b10) {
        int i10;
        int readInt = objectInput.readInt();
        if ((b10 & 15) == 1) {
            i10 = objectInput.readInt();
        } else {
            i10 = 0;
        }
        return p.u(readInt, i10);
    }

    private Object c(byte b10) {
        int i10 = b10 & 15;
        return n.d(b.values()[i10 / 2], g.values()[i10 % 2]);
    }

    private Object d(ObjectInput objectInput, byte b10) {
        k kVar = (k) objectInput.readObject();
        m mVar = (m) objectInput.readObject();
        o oVar = l.f39627o;
        if ((b10 & 15) == 1) {
            oVar = (o) objectInput.readObject();
        }
        return new c(kVar, mVar, oVar);
    }

    private void e(ObjectOutput objectOutput) {
        a aVar = (a) this.f39604d;
        objectOutput.writeByte(192);
        objectOutput.writeObject(aVar.z());
        objectOutput.writeObject(aVar.R());
    }

    private void f(ObjectOutput objectOutput) {
        boolean z10;
        int i10;
        p pVar = (p) this.f39604d;
        if (pVar.k() != 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (z10) {
            i10 = 241;
        } else {
            i10 = 240;
        }
        objectOutput.writeByte(i10);
        objectOutput.writeInt(pVar.m());
        if (z10) {
            objectOutput.writeInt(pVar.k());
        }
    }

    private void g(ObjectOutput objectOutput) {
        objectOutput.writeByte(((n) this.f39604d).c() | 208);
    }

    private void h(ObjectOutput objectOutput) {
        boolean z10;
        int i10;
        c cVar = (c) this.f39604d;
        if (cVar.E() != l.f39627o) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (z10) {
            i10 = 225;
        } else {
            i10 = 224;
        }
        objectOutput.writeByte(i10);
        objectOutput.writeObject(cVar.z());
        objectOutput.writeObject(cVar.y());
        if (z10) {
            objectOutput.writeObject(cVar.E());
        }
    }

    private Object readResolve() {
        return this.f39604d;
    }

    @Override // java.io.Externalizable
    public void readExternal(ObjectInput objectInput) {
        byte readByte = objectInput.readByte();
        switch ((readByte & 255) >> 4) {
            case 12:
                this.f39604d = a(objectInput, readByte);
                return;
            case 13:
                this.f39604d = c(readByte);
                return;
            case 14:
                this.f39604d = d(objectInput, readByte);
                return;
            case 15:
                this.f39604d = b(objectInput, readByte);
                return;
            default:
                throw new StreamCorruptedException("Unknown serialized type.");
        }
    }

    @Override // java.io.Externalizable
    public void writeExternal(ObjectOutput objectOutput) {
        switch (this.f39605e) {
            case 12:
                e(objectOutput);
                return;
            case 13:
                g(objectOutput);
                return;
            case 14:
                h(objectOutput);
                return;
            case 15:
                f(objectOutput);
                return;
            default:
                throw new InvalidClassException("Unknown serialized type.");
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public SPX(Object obj, int i10) {
        this.f39604d = obj;
        this.f39605e = i10;
    }
}
