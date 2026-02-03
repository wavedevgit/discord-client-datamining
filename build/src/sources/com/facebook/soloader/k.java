package com.facebook.soloader;

import android.content.Context;
import com.facebook.soloader.g0;
import java.io.File;
import java.io.FileInputStream;
import org.webrtc.PeerConnection;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class k extends g0 {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private final class a extends g0.e {

        /* renamed from: d  reason: collision with root package name */
        private final b[] f12096d;

        /* JADX WARN: Code restructure failed: missing block: B:29:0x00f7, code lost:
            throw new java.lang.RuntimeException("illegal line in exopackage metadata: [" + r12 + "]");
         */
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        a(com.facebook.soloader.g0 r20) {
            /*
                Method dump skipped, instructions count: 316
                To view this dump add '--comments-level debug' option
            */
            throw new UnsupportedOperationException("Method not decompiled: com.facebook.soloader.k.a.<init>(com.facebook.soloader.k, com.facebook.soloader.g0):void");
        }

        @Override // com.facebook.soloader.g0.e
        public g0.c[] h() {
            return this.f12096d;
        }

        @Override // com.facebook.soloader.g0.e
        public void l(File file) {
            b[] bVarArr;
            byte[] bArr = new byte[PeerConnection.PORTALLOCATOR_ENABLE_ANY_ADDRESS_PORTS];
            for (b bVar : this.f12096d) {
                FileInputStream fileInputStream = new FileInputStream(bVar.f12098i);
                try {
                    g0.d dVar = new g0.d(bVar, fileInputStream);
                    a(dVar, bArr, file);
                    dVar.close();
                } catch (Throwable th2) {
                    if (fileInputStream != null) {
                        fileInputStream.close();
                    }
                    throw th2;
                }
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class b extends g0.c {

        /* renamed from: i  reason: collision with root package name */
        final File f12098i;

        b(String str, String str2, File file) {
            super(str, str2);
            this.f12098i = file;
        }
    }

    public k(Context context, String str) {
        super(context, str);
    }

    @Override // com.facebook.soloader.f, com.facebook.soloader.e0
    public String c() {
        return "ExoSoSource";
    }

    @Override // com.facebook.soloader.g0
    protected g0.e q() {
        return new a(this);
    }
}
