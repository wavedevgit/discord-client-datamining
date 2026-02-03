package com.facebook.soloader;

import android.content.Context;
import com.facebook.soloader.g0;
import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.util.Arrays;
import java.util.Enumeration;
import java.util.HashMap;
import java.util.LinkedHashSet;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.zip.ZipEntry;
import java.util.zip.ZipFile;
import org.webrtc.PeerConnection;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class m extends g0 {

    /* renamed from: f  reason: collision with root package name */
    protected final File f11067f;

    /* renamed from: g  reason: collision with root package name */
    protected final String f11068g;

    /* JADX INFO: Access modifiers changed from: protected */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a extends g0.c implements Comparable {

        /* renamed from: i  reason: collision with root package name */
        final ZipEntry f11069i;

        /* renamed from: o  reason: collision with root package name */
        final int f11070o;

        a(String str, ZipEntry zipEntry, int i10) {
            super(str, String.valueOf(zipEntry.getCrc()));
            this.f11069i = zipEntry;
            this.f11070o = i10;
        }

        @Override // java.lang.Comparable
        /* renamed from: a */
        public int compareTo(a aVar) {
            return this.f11051d.compareTo(aVar.f11051d);
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj != null && a.class == obj.getClass()) {
                a aVar = (a) obj;
                if (this.f11069i.equals(aVar.f11069i) && this.f11070o == aVar.f11070o) {
                    return true;
                }
            }
            return false;
        }

        public int hashCode() {
            return (this.f11070o * 31) + this.f11069i.hashCode();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    protected class b extends g0.e {

        /* renamed from: d  reason: collision with root package name */
        protected a[] f11071d;

        /* renamed from: e  reason: collision with root package name */
        private final ZipFile f11072e;

        /* renamed from: i  reason: collision with root package name */
        private final g0 f11073i;

        b(g0 g0Var) {
            this.f11072e = new ZipFile(m.this.f11067f);
            this.f11073i = g0Var;
        }

        @Override // com.facebook.soloader.g0.e, java.io.Closeable, java.lang.AutoCloseable
        public void close() {
            this.f11072e.close();
        }

        @Override // com.facebook.soloader.g0.e
        public final g0.c[] h() {
            return x();
        }

        @Override // com.facebook.soloader.g0.e
        public void l(File file) {
            a[] x10 = x();
            byte[] bArr = new byte[PeerConnection.PORTALLOCATOR_ENABLE_ANY_ADDRESS_PORTS];
            for (a aVar : x10) {
                InputStream inputStream = this.f11072e.getInputStream(aVar.f11069i);
                try {
                    g0.d dVar = new g0.d(aVar, inputStream);
                    a(dVar, bArr, file);
                    dVar.close();
                } catch (Throwable th2) {
                    if (inputStream != null) {
                        inputStream.close();
                    }
                    throw th2;
                }
            }
        }

        a[] n() {
            LinkedHashSet linkedHashSet = new LinkedHashSet();
            HashMap hashMap = new HashMap();
            Pattern compile = Pattern.compile(m.this.f11068g);
            String[] j10 = SysUtil.j();
            Enumeration<? extends ZipEntry> entries = this.f11072e.entries();
            while (entries.hasMoreElements()) {
                ZipEntry nextElement = entries.nextElement();
                Matcher matcher = compile.matcher(nextElement.getName());
                if (matcher.matches()) {
                    int groupCount = matcher.groupCount();
                    String group = matcher.group(groupCount - 1);
                    String group2 = matcher.group(groupCount);
                    int e10 = SysUtil.e(j10, group);
                    if (e10 >= 0) {
                        linkedHashSet.add(group);
                        a aVar = (a) hashMap.get(group2);
                        if (aVar == null || e10 < aVar.f11070o) {
                            hashMap.put(group2, new a(group2, nextElement, e10));
                        }
                    }
                }
            }
            this.f11073i.t((String[]) linkedHashSet.toArray(new String[linkedHashSet.size()]));
            a[] aVarArr = (a[]) hashMap.values().toArray(new a[hashMap.size()]);
            Arrays.sort(aVarArr);
            return aVarArr;
        }

        a[] x() {
            a[] aVarArr = this.f11071d;
            if (aVarArr != null) {
                return aVarArr;
            }
            a[] n10 = n();
            this.f11071d = n10;
            return n10;
        }
    }

    public m(Context context, String str, File file, String str2) {
        super(context, str);
        this.f11067f = file;
        this.f11068g = str2;
    }

    @Override // com.facebook.soloader.f, com.facebook.soloader.e0
    public String c() {
        return "ExtractFromZipSoSource";
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // com.facebook.soloader.g0
    public g0.e q() {
        return new b(this);
    }

    @Override // com.facebook.soloader.f, com.facebook.soloader.e0
    public String toString() {
        try {
            return this.f11067f.getCanonicalPath();
        } catch (IOException unused) {
            return this.f11067f.getName();
        }
    }

    public boolean v() {
        boolean z10;
        b bVar = new b(this);
        try {
            if (bVar.n().length != 0) {
                z10 = true;
            } else {
                z10 = false;
            }
            bVar.close();
            return z10;
        } catch (Throwable th2) {
            try {
                bVar.close();
            } catch (Throwable th3) {
                th2.addSuppressed(th3);
            }
            throw th2;
        }
    }
}
