package com.rnfs;

import android.os.AsyncTask;
import android.webkit.MimeTypeMap;
import java.util.concurrent.atomic.AtomicBoolean;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class i extends AsyncTask {

    /* renamed from: a  reason: collision with root package name */
    private g f18450a;

    /* renamed from: b  reason: collision with root package name */
    private h f18451b;

    /* renamed from: c  reason: collision with root package name */
    private AtomicBoolean f18452c = new AtomicBoolean(false);

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class a implements Runnable {
        a() {
        }

        @Override // java.lang.Runnable
        public void run() {
            try {
                i iVar = i.this;
                iVar.g(iVar.f18450a, i.this.f18451b);
                i.this.f18450a.f18443g.a(i.this.f18451b);
            } catch (Exception e10) {
                i.this.f18451b.f18448c = e10;
                i.this.f18450a.f18443g.a(i.this.f18451b);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* JADX WARN: Removed duplicated region for block: B:101:0x0340  */
    /* JADX WARN: Removed duplicated region for block: B:103:0x0345  */
    /* JADX WARN: Removed duplicated region for block: B:105:0x034a  */
    /* JADX WARN: Removed duplicated region for block: B:107:0x034f  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public void g(com.rnfs.g r34, com.rnfs.h r35) {
        /*
            Method dump skipped, instructions count: 851
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: com.rnfs.i.g(com.rnfs.g, com.rnfs.h):void");
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // android.os.AsyncTask
    /* renamed from: d */
    public h doInBackground(g... gVarArr) {
        this.f18450a = gVarArr[0];
        this.f18451b = new h();
        new Thread(new a()).start();
        return this.f18451b;
    }

    protected String e(String str) {
        String str2;
        String fileExtensionFromUrl = MimeTypeMap.getFileExtensionFromUrl(str);
        if (fileExtensionFromUrl != null) {
            str2 = MimeTypeMap.getSingleton().getMimeTypeFromExtension(fileExtensionFromUrl.toLowerCase());
        } else {
            str2 = null;
        }
        if (str2 == null) {
            return "*/*";
        }
        return str2;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void f() {
        this.f18452c.set(true);
    }
}
