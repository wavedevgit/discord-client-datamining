package com.android.volley;

import android.net.Uri;
import android.os.Handler;
import android.os.Looper;
import android.text.TextUtils;
import com.android.volley.b;
import com.android.volley.p;
import com.android.volley.v;
import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.util.Collections;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class n implements Comparable {
    private static final String DEFAULT_PARAMS_ENCODING = "UTF-8";
    private b.a mCacheEntry;
    private boolean mCanceled;
    private final int mDefaultTrafficStatsTag;
    private p.a mErrorListener;
    private final v.a mEventLog;
    private final Object mLock;
    private final int mMethod;
    private b mRequestCompleteListener;
    private o mRequestQueue;
    private boolean mResponseDelivered;
    private r mRetryPolicy;
    private Integer mSequence;
    private boolean mShouldCache;
    private boolean mShouldRetryConnectionErrors;
    private boolean mShouldRetryServerErrors;
    private Object mTag;
    private final String mUrl;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class a implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ String f7795d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ long f7796e;

        a(String str, long j10) {
            this.f7795d = str;
            this.f7796e = j10;
        }

        @Override // java.lang.Runnable
        public void run() {
            n.this.mEventLog.a(this.f7795d, this.f7796e);
            n.this.mEventLog.b(n.this.toString());
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    interface b {
        void a(n nVar, p pVar);

        void b(n nVar);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public enum c {
        LOW,
        NORMAL,
        HIGH,
        IMMEDIATE
    }

    public n(int i10, String str, p.a aVar) {
        v.a aVar2;
        if (v.a.f7823c) {
            aVar2 = new v.a();
        } else {
            aVar2 = null;
        }
        this.mEventLog = aVar2;
        this.mLock = new Object();
        this.mShouldCache = true;
        this.mCanceled = false;
        this.mResponseDelivered = false;
        this.mShouldRetryServerErrors = false;
        this.mShouldRetryConnectionErrors = false;
        this.mCacheEntry = null;
        this.mMethod = i10;
        this.mUrl = str;
        this.mErrorListener = aVar;
        setRetryPolicy(new e());
        this.mDefaultTrafficStatsTag = d(str);
    }

    private byte[] a(Map map, String str) {
        StringBuilder sb2 = new StringBuilder();
        try {
            for (Map.Entry entry : map.entrySet()) {
                if (entry.getKey() != null && entry.getValue() != null) {
                    sb2.append(URLEncoder.encode((String) entry.getKey(), str));
                    sb2.append('=');
                    sb2.append(URLEncoder.encode((String) entry.getValue(), str));
                    sb2.append('&');
                } else {
                    throw new IllegalArgumentException(String.format("Request#getParams() or Request#getPostParams() returned a map containing a null key or value: (%s, %s). All keys and values must be non-null.", entry.getKey(), entry.getValue()));
                }
            }
            return sb2.toString().getBytes(str);
        } catch (UnsupportedEncodingException e10) {
            throw new RuntimeException("Encoding not supported: " + str, e10);
        }
    }

    private static int d(String str) {
        Uri parse;
        String host;
        if (!TextUtils.isEmpty(str) && (parse = Uri.parse(str)) != null && (host = parse.getHost()) != null) {
            return host.hashCode();
        }
        return 0;
    }

    public void addMarker(String str) {
        if (v.a.f7823c) {
            this.mEventLog.a(str, Thread.currentThread().getId());
        }
    }

    public void cancel() {
        synchronized (this.mLock) {
            this.mCanceled = true;
            this.mErrorListener = null;
        }
    }

    public void deliverError(u uVar) {
        p.a aVar;
        synchronized (this.mLock) {
            aVar = this.mErrorListener;
        }
        if (aVar != null) {
            aVar.a(uVar);
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public abstract void deliverResponse(Object obj);

    /* JADX INFO: Access modifiers changed from: package-private */
    public void finish(String str) {
        o oVar = this.mRequestQueue;
        if (oVar != null) {
            oVar.d(this);
        }
        if (v.a.f7823c) {
            long id2 = Thread.currentThread().getId();
            if (Looper.myLooper() != Looper.getMainLooper()) {
                new Handler(Looper.getMainLooper()).post(new a(str, id2));
                return;
            }
            this.mEventLog.a(str, id2);
            this.mEventLog.b(toString());
        }
    }

    public byte[] getBody() {
        Map<String, String> params = getParams();
        if (params != null && params.size() > 0) {
            return a(params, getParamsEncoding());
        }
        return null;
    }

    public String getBodyContentType() {
        return "application/x-www-form-urlencoded; charset=" + getParamsEncoding();
    }

    public b.a getCacheEntry() {
        return this.mCacheEntry;
    }

    public String getCacheKey() {
        String url = getUrl();
        int method = getMethod();
        if (method != 0 && method != -1) {
            return Integer.toString(method) + '-' + url;
        }
        return url;
    }

    public p.a getErrorListener() {
        p.a aVar;
        synchronized (this.mLock) {
            aVar = this.mErrorListener;
        }
        return aVar;
    }

    public Map<String, String> getHeaders() {
        return Collections.EMPTY_MAP;
    }

    public int getMethod() {
        return this.mMethod;
    }

    protected Map<String, String> getParams() {
        return null;
    }

    protected String getParamsEncoding() {
        return DEFAULT_PARAMS_ENCODING;
    }

    @Deprecated
    public byte[] getPostBody() {
        Map<String, String> postParams = getPostParams();
        if (postParams != null && postParams.size() > 0) {
            return a(postParams, getPostParamsEncoding());
        }
        return null;
    }

    @Deprecated
    public String getPostBodyContentType() {
        return getBodyContentType();
    }

    @Deprecated
    protected Map<String, String> getPostParams() {
        return getParams();
    }

    @Deprecated
    protected String getPostParamsEncoding() {
        return getParamsEncoding();
    }

    public c getPriority() {
        return c.NORMAL;
    }

    public r getRetryPolicy() {
        return this.mRetryPolicy;
    }

    public final int getSequence() {
        Integer num = this.mSequence;
        if (num != null) {
            return num.intValue();
        }
        throw new IllegalStateException("getSequence called before setSequence");
    }

    public Object getTag() {
        return this.mTag;
    }

    public final int getTimeoutMs() {
        return getRetryPolicy().c();
    }

    public int getTrafficStatsTag() {
        return this.mDefaultTrafficStatsTag;
    }

    public String getUrl() {
        return this.mUrl;
    }

    public boolean hasHadResponseDelivered() {
        boolean z10;
        synchronized (this.mLock) {
            z10 = this.mResponseDelivered;
        }
        return z10;
    }

    public boolean isCanceled() {
        boolean z10;
        synchronized (this.mLock) {
            z10 = this.mCanceled;
        }
        return z10;
    }

    public void markDelivered() {
        synchronized (this.mLock) {
            this.mResponseDelivered = true;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void notifyListenerResponseNotUsable() {
        b bVar;
        synchronized (this.mLock) {
            bVar = this.mRequestCompleteListener;
        }
        if (bVar != null) {
            bVar.b(this);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void notifyListenerResponseReceived(p pVar) {
        b bVar;
        synchronized (this.mLock) {
            bVar = this.mRequestCompleteListener;
        }
        if (bVar != null) {
            bVar.a(this, pVar);
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public u parseNetworkError(u uVar) {
        return uVar;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public abstract p parseNetworkResponse(k kVar);

    /* JADX INFO: Access modifiers changed from: package-private */
    public void sendEvent(int i10) {
        o oVar = this.mRequestQueue;
        if (oVar != null) {
            oVar.f(this, i10);
        }
    }

    public n setCacheEntry(b.a aVar) {
        this.mCacheEntry = aVar;
        return this;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void setNetworkRequestCompleteListener(b bVar) {
        synchronized (this.mLock) {
            this.mRequestCompleteListener = bVar;
        }
    }

    public n setRequestQueue(o oVar) {
        this.mRequestQueue = oVar;
        return this;
    }

    public n setRetryPolicy(r rVar) {
        this.mRetryPolicy = rVar;
        return this;
    }

    public final n setSequence(int i10) {
        this.mSequence = Integer.valueOf(i10);
        return this;
    }

    public final n setShouldCache(boolean z10) {
        this.mShouldCache = z10;
        return this;
    }

    public final n setShouldRetryConnectionErrors(boolean z10) {
        this.mShouldRetryConnectionErrors = z10;
        return this;
    }

    public final n setShouldRetryServerErrors(boolean z10) {
        this.mShouldRetryServerErrors = z10;
        return this;
    }

    public n setTag(Object obj) {
        this.mTag = obj;
        return this;
    }

    public final boolean shouldCache() {
        return this.mShouldCache;
    }

    public final boolean shouldRetryConnectionErrors() {
        return this.mShouldRetryConnectionErrors;
    }

    public final boolean shouldRetryServerErrors() {
        return this.mShouldRetryServerErrors;
    }

    public String toString() {
        String str;
        String str2 = "0x" + Integer.toHexString(getTrafficStatsTag());
        StringBuilder sb2 = new StringBuilder();
        if (isCanceled()) {
            str = "[X] ";
        } else {
            str = "[ ] ";
        }
        sb2.append(str);
        sb2.append(getUrl());
        sb2.append(" ");
        sb2.append(str2);
        sb2.append(" ");
        sb2.append(getPriority());
        sb2.append(" ");
        sb2.append(this.mSequence);
        return sb2.toString();
    }

    @Override // java.lang.Comparable
    public int compareTo(n nVar) {
        c priority = getPriority();
        c priority2 = nVar.getPriority();
        return priority == priority2 ? this.mSequence.intValue() - nVar.mSequence.intValue() : priority2.ordinal() - priority.ordinal();
    }
}
