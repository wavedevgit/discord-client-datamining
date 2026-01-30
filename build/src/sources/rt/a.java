package rt;

import java.io.ByteArrayInputStream;
import java.io.DataInputStream;
import java.io.IOException;
import java.io.ObjectInputStream;
import java.util.Collections;
import java.util.Map;
import java.util.Set;
import net.time4j.f0;
import net.time4j.tz.m;
import net.time4j.tz.r;
import net.time4j.tz.s;
import qt.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class a implements r, c {

    /* renamed from: a  reason: collision with root package name */
    private final String f48651a;

    /* renamed from: b  reason: collision with root package name */
    private final String f48652b;

    /* renamed from: c  reason: collision with root package name */
    private final Map f48653c;

    /* renamed from: d  reason: collision with root package name */
    private final Map f48654d;

    /* renamed from: e  reason: collision with root package name */
    private final f0 f48655e;

    /* renamed from: f  reason: collision with root package name */
    private final Map f48656f;

    /* JADX WARN: Removed duplicated region for block: B:79:0x0208  */
    /* JADX WARN: Removed duplicated region for block: B:81:0x021b  */
    /* JADX WARN: Removed duplicated region for block: B:92:0x0200 A[EXC_TOP_SPLITTER, SYNTHETIC] */
    /* JADX WARN: Removed duplicated region for block: B:96:0x021f A[EXC_TOP_SPLITTER, SYNTHETIC] */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public a() {
        /*
            Method dump skipped, instructions count: 547
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: rt.a.<init>():void");
    }

    private static void i(DataInputStream dataInputStream, String str) {
        byte readByte = dataInputStream.readByte();
        byte readByte2 = dataInputStream.readByte();
        byte readByte3 = dataInputStream.readByte();
        byte readByte4 = dataInputStream.readByte();
        byte readByte5 = dataInputStream.readByte();
        byte readByte6 = dataInputStream.readByte();
        if (readByte == 116 && readByte2 == 122 && readByte3 == 114 && readByte4 == 101 && readByte5 == 112 && readByte6 == 111) {
            return;
        }
        throw new IOException("Invalid tz-repository: " + str);
    }

    private static Class k() {
        if (Boolean.getBoolean("test.environment")) {
            try {
                return Class.forName("net.time4j.tz.spi.RepositoryTest");
            } catch (ClassNotFoundException e10) {
                throw new AssertionError(e10);
            }
        }
        return a.class;
    }

    @Override // net.time4j.tz.r
    public s a() {
        return null;
    }

    @Override // qt.c
    public boolean b() {
        return !this.f48656f.isEmpty();
    }

    @Override // net.time4j.tz.r
    public Map c() {
        return this.f48654d;
    }

    @Override // net.time4j.tz.r
    public String e() {
        return this.f48651a;
    }

    @Override // qt.c
    public Map f() {
        return Collections.unmodifiableMap(this.f48656f);
    }

    @Override // net.time4j.tz.r
    public Set g() {
        return this.f48653c.keySet();
    }

    @Override // net.time4j.tz.r
    public String getLocation() {
        return this.f48652b;
    }

    @Override // net.time4j.tz.r
    public String getName() {
        return "TZDB";
    }

    @Override // net.time4j.tz.r
    public String h() {
        return "";
    }

    @Override // qt.c
    /* renamed from: j */
    public f0 d() {
        return this.f48655e;
    }

    @Override // net.time4j.tz.r
    public m load(String str) {
        try {
            byte[] bArr = (byte[]) this.f48653c.get(str);
            if (bArr != null) {
                return (m) new ObjectInputStream(new ByteArrayInputStream(bArr)).readObject();
            }
            return null;
        } catch (IOException e10) {
            e10.printStackTrace();
            return null;
        } catch (ClassNotFoundException e11) {
            e11.printStackTrace();
            return null;
        }
    }

    public String toString() {
        return "TZ-REPOSITORY(" + this.f48651a + ")";
    }
}
