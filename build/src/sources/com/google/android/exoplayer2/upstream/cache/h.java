package com.google.android.exoplayer2.upstream.cache;

import android.content.ContentValues;
import android.database.Cursor;
import android.database.SQLException;
import android.database.sqlite.SQLiteDatabase;
import android.database.sqlite.SQLiteException;
import android.util.SparseArray;
import android.util.SparseBooleanArray;
import com.facebook.react.devsupport.StackTraceHelper;
import java.io.BufferedInputStream;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.DataInputStream;
import java.io.DataOutputStream;
import java.io.File;
import java.io.IOException;
import java.io.OutputStream;
import java.security.InvalidAlgorithmParameterException;
import java.security.InvalidKeyException;
import java.security.Key;
import java.security.NoSuchAlgorithmException;
import java.security.SecureRandom;
import java.util.Arrays;
import java.util.Collection;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;
import java.util.Set;
import javax.crypto.Cipher;
import javax.crypto.CipherInputStream;
import javax.crypto.CipherOutputStream;
import javax.crypto.NoSuchPaddingException;
import javax.crypto.spec.IvParameterSpec;
import javax.crypto.spec.SecretKeySpec;
import mi.t0;
import mi.u;
import ne.w0;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class h {

    /* renamed from: a  reason: collision with root package name */
    private final HashMap f13422a;

    /* renamed from: b  reason: collision with root package name */
    private final SparseArray f13423b;

    /* renamed from: c  reason: collision with root package name */
    private final SparseBooleanArray f13424c;

    /* renamed from: d  reason: collision with root package name */
    private final SparseBooleanArray f13425d;

    /* renamed from: e  reason: collision with root package name */
    private c f13426e;

    /* renamed from: f  reason: collision with root package name */
    private c f13427f;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class a implements c {

        /* renamed from: e  reason: collision with root package name */
        private static final String[] f13428e = {StackTraceHelper.ID_KEY, "key", "metadata"};

        /* renamed from: a  reason: collision with root package name */
        private final pc.b f13429a;

        /* renamed from: b  reason: collision with root package name */
        private final SparseArray f13430b = new SparseArray();

        /* renamed from: c  reason: collision with root package name */
        private String f13431c;

        /* renamed from: d  reason: collision with root package name */
        private String f13432d;

        public a(pc.b bVar) {
            this.f13429a = bVar;
        }

        private void i(SQLiteDatabase sQLiteDatabase, g gVar) {
            ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
            h.t(gVar.c(), new DataOutputStream(byteArrayOutputStream));
            byte[] byteArray = byteArrayOutputStream.toByteArray();
            ContentValues contentValues = new ContentValues();
            contentValues.put(StackTraceHelper.ID_KEY, Integer.valueOf(gVar.f13415a));
            contentValues.put("key", gVar.f13416b);
            contentValues.put("metadata", byteArray);
            sQLiteDatabase.replaceOrThrow((String) ne.a.e(this.f13432d), null, contentValues);
        }

        private static void j(pc.b bVar, String str) {
            try {
                String n10 = n(str);
                SQLiteDatabase writableDatabase = bVar.getWritableDatabase();
                writableDatabase.beginTransactionNonExclusive();
                pc.e.c(writableDatabase, 1, str);
                l(writableDatabase, n10);
                writableDatabase.setTransactionSuccessful();
                writableDatabase.endTransaction();
            } catch (SQLException e10) {
                throw new pc.a(e10);
            }
        }

        private void k(SQLiteDatabase sQLiteDatabase, int i10) {
            sQLiteDatabase.delete((String) ne.a.e(this.f13432d), "id = ?", new String[]{Integer.toString(i10)});
        }

        private static void l(SQLiteDatabase sQLiteDatabase, String str) {
            sQLiteDatabase.execSQL("DROP TABLE IF EXISTS " + str);
        }

        private Cursor m() {
            return this.f13429a.getReadableDatabase().query((String) ne.a.e(this.f13432d), f13428e, null, null, null, null, null);
        }

        private static String n(String str) {
            return "ExoPlayerCacheIndex" + str;
        }

        private void o(SQLiteDatabase sQLiteDatabase) {
            pc.e.d(sQLiteDatabase, 1, (String) ne.a.e(this.f13431c), 1);
            l(sQLiteDatabase, (String) ne.a.e(this.f13432d));
            sQLiteDatabase.execSQL("CREATE TABLE " + this.f13432d + " (id INTEGER PRIMARY KEY NOT NULL,key TEXT NOT NULL,metadata BLOB NOT NULL)");
        }

        @Override // com.google.android.exoplayer2.upstream.cache.h.c
        public void a(g gVar, boolean z10) {
            if (z10) {
                this.f13430b.delete(gVar.f13415a);
            } else {
                this.f13430b.put(gVar.f13415a, null);
            }
        }

        @Override // com.google.android.exoplayer2.upstream.cache.h.c
        public boolean b() {
            try {
                if (pc.e.b(this.f13429a.getReadableDatabase(), 1, (String) ne.a.e(this.f13431c)) != -1) {
                    return true;
                }
                return false;
            } catch (SQLException e10) {
                throw new pc.a(e10);
            }
        }

        @Override // com.google.android.exoplayer2.upstream.cache.h.c
        public void c(HashMap hashMap) {
            if (this.f13430b.size() == 0) {
                return;
            }
            try {
                SQLiteDatabase writableDatabase = this.f13429a.getWritableDatabase();
                writableDatabase.beginTransactionNonExclusive();
                for (int i10 = 0; i10 < this.f13430b.size(); i10++) {
                    g gVar = (g) this.f13430b.valueAt(i10);
                    if (gVar == null) {
                        k(writableDatabase, this.f13430b.keyAt(i10));
                    } else {
                        i(writableDatabase, gVar);
                    }
                }
                writableDatabase.setTransactionSuccessful();
                this.f13430b.clear();
                writableDatabase.endTransaction();
            } catch (SQLException e10) {
                throw new pc.a(e10);
            }
        }

        @Override // com.google.android.exoplayer2.upstream.cache.h.c
        public void d(long j10) {
            String hexString = Long.toHexString(j10);
            this.f13431c = hexString;
            this.f13432d = n(hexString);
        }

        @Override // com.google.android.exoplayer2.upstream.cache.h.c
        public void e(HashMap hashMap) {
            try {
                SQLiteDatabase writableDatabase = this.f13429a.getWritableDatabase();
                writableDatabase.beginTransactionNonExclusive();
                o(writableDatabase);
                for (g gVar : hashMap.values()) {
                    i(writableDatabase, gVar);
                }
                writableDatabase.setTransactionSuccessful();
                this.f13430b.clear();
                writableDatabase.endTransaction();
            } catch (SQLException e10) {
                throw new pc.a(e10);
            }
        }

        @Override // com.google.android.exoplayer2.upstream.cache.h.c
        public void f(g gVar) {
            this.f13430b.put(gVar.f13415a, gVar);
        }

        @Override // com.google.android.exoplayer2.upstream.cache.h.c
        public void g(HashMap hashMap, SparseArray sparseArray) {
            boolean z10;
            if (this.f13430b.size() == 0) {
                z10 = true;
            } else {
                z10 = false;
            }
            ne.a.g(z10);
            try {
                if (pc.e.b(this.f13429a.getReadableDatabase(), 1, (String) ne.a.e(this.f13431c)) != 1) {
                    SQLiteDatabase writableDatabase = this.f13429a.getWritableDatabase();
                    writableDatabase.beginTransactionNonExclusive();
                    o(writableDatabase);
                    writableDatabase.setTransactionSuccessful();
                    writableDatabase.endTransaction();
                }
                Cursor m10 = m();
                while (m10.moveToNext()) {
                    g gVar = new g(m10.getInt(0), (String) ne.a.e(m10.getString(1)), h.q(new DataInputStream(new ByteArrayInputStream(m10.getBlob(2)))));
                    hashMap.put(gVar.f13416b, gVar);
                    sparseArray.put(gVar.f13415a, gVar.f13416b);
                }
                m10.close();
            } catch (SQLiteException e10) {
                hashMap.clear();
                sparseArray.clear();
                throw new pc.a(e10);
            }
        }

        @Override // com.google.android.exoplayer2.upstream.cache.h.c
        public void h() {
            j(this.f13429a, (String) ne.a.e(this.f13431c));
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static class b implements c {

        /* renamed from: a  reason: collision with root package name */
        private final boolean f13433a;

        /* renamed from: b  reason: collision with root package name */
        private final Cipher f13434b;

        /* renamed from: c  reason: collision with root package name */
        private final SecretKeySpec f13435c;

        /* renamed from: d  reason: collision with root package name */
        private final SecureRandom f13436d;

        /* renamed from: e  reason: collision with root package name */
        private final ne.b f13437e;

        /* renamed from: f  reason: collision with root package name */
        private boolean f13438f;

        /* renamed from: g  reason: collision with root package name */
        private i f13439g;

        public b(File file, byte[] bArr, boolean z10) {
            boolean z11;
            Cipher cipher;
            SecretKeySpec secretKeySpec;
            if (bArr == null && z10) {
                z11 = false;
            } else {
                z11 = true;
            }
            ne.a.g(z11);
            if (bArr != null) {
                ne.a.a(bArr.length == 16);
                try {
                    cipher = h.a();
                    secretKeySpec = new SecretKeySpec(bArr, "AES");
                } catch (NoSuchAlgorithmException | NoSuchPaddingException e10) {
                    throw new IllegalStateException(e10);
                }
            } else {
                ne.a.a(!z10);
                cipher = null;
                secretKeySpec = null;
            }
            this.f13433a = z10;
            this.f13434b = cipher;
            this.f13435c = secretKeySpec;
            this.f13436d = z10 ? new SecureRandom() : null;
            this.f13437e = new ne.b(file);
        }

        private int i(g gVar, int i10) {
            int i11;
            int hashCode;
            int hashCode2 = (gVar.f13415a * 31) + gVar.f13416b.hashCode();
            if (i10 < 2) {
                long d10 = me.d.d(gVar.c());
                i11 = hashCode2 * 31;
                hashCode = (int) (d10 ^ (d10 >>> 32));
            } else {
                i11 = hashCode2 * 31;
                hashCode = gVar.c().hashCode();
            }
            return i11 + hashCode;
        }

        private g j(int i10, DataInputStream dataInputStream) {
            me.f q10;
            int readInt = dataInputStream.readInt();
            String readUTF = dataInputStream.readUTF();
            if (i10 >= 2) {
                q10 = h.q(dataInputStream);
            } else {
                long readLong = dataInputStream.readLong();
                me.e eVar = new me.e();
                me.e.g(eVar, readLong);
                q10 = me.f.f37492c.g(eVar);
            }
            return new g(readInt, readUTF, q10);
        }

        private boolean k(HashMap hashMap, SparseArray sparseArray) {
            BufferedInputStream bufferedInputStream;
            DataInputStream dataInputStream;
            boolean z10;
            if (!this.f13437e.c()) {
                return true;
            }
            DataInputStream dataInputStream2 = null;
            try {
                bufferedInputStream = new BufferedInputStream(this.f13437e.d());
                dataInputStream = new DataInputStream(bufferedInputStream);
            } catch (IOException unused) {
            } catch (Throwable th2) {
                th = th2;
            }
            try {
                int readInt = dataInputStream.readInt();
                if (readInt >= 0 && readInt <= 2) {
                    if ((dataInputStream.readInt() & 1) != 0) {
                        if (this.f13434b == null) {
                            w0.n(dataInputStream);
                            return false;
                        }
                        byte[] bArr = new byte[16];
                        dataInputStream.readFully(bArr);
                        try {
                            this.f13434b.init(2, (Key) w0.j(this.f13435c), new IvParameterSpec(bArr));
                            dataInputStream = new DataInputStream(new CipherInputStream(bufferedInputStream, this.f13434b));
                        } catch (InvalidAlgorithmParameterException e10) {
                            e = e10;
                            throw new IllegalStateException(e);
                        } catch (InvalidKeyException e11) {
                            e = e11;
                            throw new IllegalStateException(e);
                        }
                    } else if (this.f13433a) {
                        this.f13438f = true;
                    }
                    int readInt2 = dataInputStream.readInt();
                    int i10 = 0;
                    for (int i11 = 0; i11 < readInt2; i11++) {
                        g j10 = j(readInt, dataInputStream);
                        hashMap.put(j10.f13416b, j10);
                        sparseArray.put(j10.f13415a, j10.f13416b);
                        i10 += i(j10, readInt);
                    }
                    int readInt3 = dataInputStream.readInt();
                    if (dataInputStream.read() == -1) {
                        z10 = true;
                    } else {
                        z10 = false;
                    }
                    if (readInt3 == i10 && z10) {
                        w0.n(dataInputStream);
                        return true;
                    }
                    w0.n(dataInputStream);
                    return false;
                }
                w0.n(dataInputStream);
                return false;
            } catch (IOException unused2) {
                dataInputStream2 = dataInputStream;
                if (dataInputStream2 != null) {
                    w0.n(dataInputStream2);
                }
                return false;
            } catch (Throwable th3) {
                th = th3;
                dataInputStream2 = dataInputStream;
                if (dataInputStream2 != null) {
                    w0.n(dataInputStream2);
                }
                throw th;
            }
        }

        private void l(g gVar, DataOutputStream dataOutputStream) {
            dataOutputStream.writeInt(gVar.f13415a);
            dataOutputStream.writeUTF(gVar.f13416b);
            h.t(gVar.c(), dataOutputStream);
        }

        private void m(HashMap hashMap) {
            i iVar;
            DataOutputStream dataOutputStream;
            DataOutputStream dataOutputStream2 = null;
            try {
                OutputStream f10 = this.f13437e.f();
                i iVar2 = this.f13439g;
                if (iVar2 == null) {
                    this.f13439g = new i(f10);
                } else {
                    iVar2.a(f10);
                }
                iVar = this.f13439g;
                dataOutputStream = new DataOutputStream(iVar);
            } catch (Throwable th2) {
                th = th2;
            }
            try {
                dataOutputStream.writeInt(2);
                dataOutputStream.writeInt(this.f13433a ? 1 : 0);
                if (this.f13433a) {
                    byte[] bArr = new byte[16];
                    ((SecureRandom) w0.j(this.f13436d)).nextBytes(bArr);
                    dataOutputStream.write(bArr);
                    try {
                        ((Cipher) w0.j(this.f13434b)).init(1, (Key) w0.j(this.f13435c), new IvParameterSpec(bArr));
                        dataOutputStream.flush();
                        dataOutputStream = new DataOutputStream(new CipherOutputStream(iVar, this.f13434b));
                    } catch (InvalidAlgorithmParameterException e10) {
                        e = e10;
                        throw new IllegalStateException(e);
                    } catch (InvalidKeyException e11) {
                        e = e11;
                        throw new IllegalStateException(e);
                    }
                }
                dataOutputStream.writeInt(hashMap.size());
                int i10 = 0;
                for (g gVar : hashMap.values()) {
                    l(gVar, dataOutputStream);
                    i10 += i(gVar, 2);
                }
                dataOutputStream.writeInt(i10);
                this.f13437e.b(dataOutputStream);
                w0.n(null);
            } catch (Throwable th3) {
                th = th3;
                dataOutputStream2 = dataOutputStream;
                w0.n(dataOutputStream2);
                throw th;
            }
        }

        @Override // com.google.android.exoplayer2.upstream.cache.h.c
        public void a(g gVar, boolean z10) {
            this.f13438f = true;
        }

        @Override // com.google.android.exoplayer2.upstream.cache.h.c
        public boolean b() {
            return this.f13437e.c();
        }

        @Override // com.google.android.exoplayer2.upstream.cache.h.c
        public void c(HashMap hashMap) {
            if (!this.f13438f) {
                return;
            }
            e(hashMap);
        }

        @Override // com.google.android.exoplayer2.upstream.cache.h.c
        public void d(long j10) {
        }

        @Override // com.google.android.exoplayer2.upstream.cache.h.c
        public void e(HashMap hashMap) {
            m(hashMap);
            this.f13438f = false;
        }

        @Override // com.google.android.exoplayer2.upstream.cache.h.c
        public void f(g gVar) {
            this.f13438f = true;
        }

        @Override // com.google.android.exoplayer2.upstream.cache.h.c
        public void g(HashMap hashMap, SparseArray sparseArray) {
            ne.a.g(!this.f13438f);
            if (!k(hashMap, sparseArray)) {
                hashMap.clear();
                sparseArray.clear();
                this.f13437e.a();
            }
        }

        @Override // com.google.android.exoplayer2.upstream.cache.h.c
        public void h() {
            this.f13437e.a();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface c {
        void a(g gVar, boolean z10);

        boolean b();

        void c(HashMap hashMap);

        void d(long j10);

        void e(HashMap hashMap);

        void f(g gVar);

        void g(HashMap hashMap, SparseArray sparseArray);

        void h();
    }

    public h(pc.b bVar, File file, byte[] bArr, boolean z10, boolean z11) {
        boolean z12;
        a aVar;
        if (bVar == null && file == null) {
            z12 = false;
        } else {
            z12 = true;
        }
        ne.a.g(z12);
        this.f13422a = new HashMap();
        this.f13423b = new SparseArray();
        this.f13424c = new SparseBooleanArray();
        this.f13425d = new SparseBooleanArray();
        if (bVar != null) {
            aVar = new a(bVar);
        } else {
            aVar = null;
        }
        b bVar2 = file != null ? new b(new File(file, "cached_content_index.exi"), bArr, z10) : null;
        if (aVar != null && (bVar2 == null || !z11)) {
            this.f13426e = aVar;
            this.f13427f = bVar2;
            return;
        }
        this.f13426e = (c) w0.j(bVar2);
        this.f13427f = aVar;
    }

    static /* synthetic */ Cipher a() {
        return i();
    }

    private g d(String str) {
        int l10 = l(this.f13423b);
        g gVar = new g(l10, str);
        this.f13422a.put(str, gVar);
        this.f13423b.put(l10, str);
        this.f13425d.put(l10, true);
        this.f13426e.f(gVar);
        return gVar;
    }

    private static Cipher i() {
        if (w0.f39657a == 18) {
            try {
                return Cipher.getInstance("AES/CBC/PKCS5PADDING", "BC");
            } catch (Throwable unused) {
            }
        }
        return Cipher.getInstance("AES/CBC/PKCS5PADDING");
    }

    static int l(SparseArray sparseArray) {
        int keyAt;
        int size = sparseArray.size();
        int i10 = 0;
        if (size == 0) {
            keyAt = 0;
        } else {
            keyAt = sparseArray.keyAt(size - 1) + 1;
        }
        if (keyAt < 0) {
            while (i10 < size && i10 == sparseArray.keyAt(i10)) {
                i10++;
            }
            return i10;
        }
        return keyAt;
    }

    public static boolean o(String str) {
        return str.startsWith("cached_content_index.exi");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static me.f q(DataInputStream dataInputStream) {
        int readInt = dataInputStream.readInt();
        HashMap hashMap = new HashMap();
        for (int i10 = 0; i10 < readInt; i10++) {
            String readUTF = dataInputStream.readUTF();
            int readInt2 = dataInputStream.readInt();
            if (readInt2 >= 0) {
                int min = Math.min(readInt2, 10485760);
                byte[] bArr = w0.f39662f;
                int i11 = 0;
                while (i11 != readInt2) {
                    int i12 = i11 + min;
                    bArr = Arrays.copyOf(bArr, i12);
                    dataInputStream.readFully(bArr, i11, min);
                    min = Math.min(readInt2 - i12, 10485760);
                    i11 = i12;
                }
                hashMap.put(readUTF, bArr);
            } else {
                throw new IOException("Invalid value size: " + readInt2);
            }
        }
        return new me.f(hashMap);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static void t(me.f fVar, DataOutputStream dataOutputStream) {
        Set<Map.Entry> h10 = fVar.h();
        dataOutputStream.writeInt(h10.size());
        for (Map.Entry entry : h10) {
            dataOutputStream.writeUTF((String) entry.getKey());
            byte[] bArr = (byte[]) entry.getValue();
            dataOutputStream.writeInt(bArr.length);
            dataOutputStream.write(bArr);
        }
    }

    public void e(String str, me.e eVar) {
        g m10 = m(str);
        if (m10.b(eVar)) {
            this.f13426e.f(m10);
        }
    }

    public int f(String str) {
        return m(str).f13415a;
    }

    public g g(String str) {
        return (g) this.f13422a.get(str);
    }

    public Collection h() {
        return Collections.unmodifiableCollection(this.f13422a.values());
    }

    public me.d j(String str) {
        g g10 = g(str);
        if (g10 != null) {
            return g10.c();
        }
        return me.f.f37492c;
    }

    public String k(int i10) {
        return (String) this.f13423b.get(i10);
    }

    public g m(String str) {
        g gVar = (g) this.f13422a.get(str);
        if (gVar == null) {
            return d(str);
        }
        return gVar;
    }

    public void n(long j10) {
        c cVar;
        this.f13426e.d(j10);
        c cVar2 = this.f13427f;
        if (cVar2 != null) {
            cVar2.d(j10);
        }
        if (!this.f13426e.b() && (cVar = this.f13427f) != null && cVar.b()) {
            this.f13427f.g(this.f13422a, this.f13423b);
            this.f13426e.e(this.f13422a);
        } else {
            this.f13426e.g(this.f13422a, this.f13423b);
        }
        c cVar3 = this.f13427f;
        if (cVar3 != null) {
            cVar3.h();
            this.f13427f = null;
        }
    }

    public void p(String str) {
        g gVar = (g) this.f13422a.get(str);
        if (gVar != null && gVar.f() && gVar.h()) {
            this.f13422a.remove(str);
            int i10 = gVar.f13415a;
            boolean z10 = this.f13425d.get(i10);
            this.f13426e.a(gVar, z10);
            if (z10) {
                this.f13423b.remove(i10);
                this.f13425d.delete(i10);
                return;
            }
            this.f13423b.put(i10, null);
            this.f13424c.put(i10, true);
        }
    }

    public void r() {
        t0 r10 = u.n(this.f13422a.keySet()).r();
        while (r10.hasNext()) {
            p((String) r10.next());
        }
    }

    public void s() {
        this.f13426e.c(this.f13422a);
        int size = this.f13424c.size();
        for (int i10 = 0; i10 < size; i10++) {
            this.f13423b.remove(this.f13424c.keyAt(i10));
        }
        this.f13424c.clear();
        this.f13425d.clear();
    }
}
