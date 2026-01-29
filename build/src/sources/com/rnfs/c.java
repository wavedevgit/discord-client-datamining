package com.rnfs;

import android.os.AsyncTask;
import com.rnfs.a;
import java.net.HttpURLConnection;
import java.util.concurrent.atomic.AtomicBoolean;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class c extends AsyncTask {

    /* renamed from: a  reason: collision with root package name */
    private com.rnfs.a f18799a;

    /* renamed from: b  reason: collision with root package name */
    private AtomicBoolean f18800b = new AtomicBoolean(false);

    /* renamed from: c  reason: collision with root package name */
    b f18801c;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class a implements Runnable {
        a() {
        }

        @Override // java.lang.Runnable
        public void run() {
            try {
                c cVar = c.this;
                cVar.d(cVar.f18799a, c.this.f18801c);
                c.this.f18799a.f18793h.a(c.this.f18801c);
            } catch (Exception e10) {
                c cVar2 = c.this;
                cVar2.f18801c.f18798c = e10;
                cVar2.f18799a.f18793h.a(c.this.f18801c);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* JADX WARN: Removed duplicated region for block: B:90:0x01f1  */
    /* JADX WARN: Removed duplicated region for block: B:92:0x01f6  */
    /* JADX WARN: Removed duplicated region for block: B:94:0x01fb  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public void d(com.rnfs.a r32, com.rnfs.b r33) {
        /*
            Method dump skipped, instructions count: 511
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: com.rnfs.c.d(com.rnfs.a, com.rnfs.b):void");
    }

    private long e(HttpURLConnection httpURLConnection) {
        return httpURLConnection.getContentLengthLong();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // android.os.AsyncTask
    /* renamed from: c */
    public b doInBackground(com.rnfs.a... aVarArr) {
        this.f18799a = aVarArr[0];
        this.f18801c = new b();
        new Thread(new a()).start();
        return this.f18801c;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // android.os.AsyncTask
    /* renamed from: f */
    public void onProgressUpdate(long[]... jArr) {
        super.onProgressUpdate(jArr);
        a.b bVar = this.f18799a.f18795j;
        if (bVar != null) {
            long[] jArr2 = jArr[0];
            bVar.a(jArr2[0], jArr2[1]);
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void g() {
        this.f18800b.set(true);
    }
}
