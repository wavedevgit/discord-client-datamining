package com.linkedin.android.litr;

import android.os.Bundle;
import android.os.Handler;
import android.os.Looper;
import android.os.Message;
import android.util.Log;
import com.facebook.react.views.progressbar.ReactProgressBarViewManager;
import java.util.List;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
class a {

    /* renamed from: e  reason: collision with root package name */
    private static final String f18068e = "a";

    /* renamed from: a  reason: collision with root package name */
    private final Map f18069a;

    /* renamed from: b  reason: collision with root package name */
    private final ol.a f18070b;

    /* renamed from: c  reason: collision with root package name */
    private final Bundle f18071c = new Bundle();

    /* renamed from: d  reason: collision with root package name */
    private b f18072d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private static class b extends Handler {

        /* renamed from: a  reason: collision with root package name */
        private final ol.a f18073a;

        @Override // android.os.Handler
        public void handleMessage(Message message) {
            List list;
            Object obj = message.obj;
            if (obj == null) {
                list = null;
            } else {
                list = (List) obj;
            }
            Bundle data = message.getData();
            String string = data.getString("jobId");
            if (string != null) {
                int i10 = message.what;
                if (i10 != 0) {
                    if (i10 != 1) {
                        if (i10 != 2) {
                            if (i10 != 3) {
                                if (i10 != 4) {
                                    String str = a.f18068e;
                                    Log.e(str, "Unknown event received: " + message.what);
                                    return;
                                }
                                this.f18073a.onCancelled(string, list);
                                return;
                            }
                            this.f18073a.onProgress(string, data.getFloat(ReactProgressBarViewManager.PROP_PROGRESS));
                            return;
                        }
                        this.f18073a.onError(string, (Throwable) data.getSerializable("throwable"), list);
                        return;
                    }
                    this.f18073a.onCompleted(string, list);
                    return;
                }
                this.f18073a.onStarted(string);
                return;
            }
            throw new IllegalArgumentException("Handler message doesn't contain an id!");
        }

        private b(Looper looper, ol.a aVar) {
            super(looper);
            this.f18073a = aVar;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public a(Map map, ol.a aVar, Looper looper) {
        this.f18069a = map;
        this.f18070b = aVar;
        if (looper != null) {
            this.f18072d = new b(looper, aVar);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void b(String str, List list) {
        this.f18069a.remove(str);
        b bVar = this.f18072d;
        if (bVar == null) {
            this.f18070b.onCancelled(str, list);
            return;
        }
        Message obtain = Message.obtain(bVar, 4);
        obtain.obj = list;
        this.f18071c.putString("jobId", str);
        obtain.setData(this.f18071c);
        obtain.sendToTarget();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void c(String str, List list) {
        this.f18069a.remove(str);
        b bVar = this.f18072d;
        if (bVar == null) {
            this.f18070b.onCompleted(str, list);
            return;
        }
        Message obtain = Message.obtain(bVar, 1);
        obtain.obj = list;
        this.f18071c.putString("jobId", str);
        obtain.setData(this.f18071c);
        obtain.sendToTarget();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void d(String str, Throwable th2, List list) {
        this.f18069a.remove(str);
        b bVar = this.f18072d;
        if (bVar == null) {
            this.f18070b.onError(str, th2, list);
            return;
        }
        Message obtain = Message.obtain(bVar, 2);
        obtain.obj = list;
        this.f18071c.putString("jobId", str);
        this.f18071c.putSerializable("throwable", th2);
        obtain.setData(this.f18071c);
        obtain.sendToTarget();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void e(String str, float f10) {
        b bVar = this.f18072d;
        if (bVar == null) {
            this.f18070b.onProgress(str, f10);
            return;
        }
        Message obtain = Message.obtain(bVar, 3);
        obtain.obj = null;
        this.f18071c.putString("jobId", str);
        this.f18071c.putFloat(ReactProgressBarViewManager.PROP_PROGRESS, f10);
        obtain.setData(this.f18071c);
        obtain.sendToTarget();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void f(String str) {
        b bVar = this.f18072d;
        if (bVar == null) {
            this.f18070b.onStarted(str);
            return;
        }
        Message obtain = Message.obtain(bVar, 0);
        obtain.obj = null;
        this.f18071c.putString("jobId", str);
        obtain.setData(this.f18071c);
        obtain.sendToTarget();
    }
}
