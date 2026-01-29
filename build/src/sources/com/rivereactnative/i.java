package com.rivereactnative;

import com.android.volley.p;
import java.io.UnsupportedEncodingException;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class i extends com.android.volley.n {

    /* renamed from: d  reason: collision with root package name */
    private final p.b f18667d;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public i(String url, p.b listener, p.a errorListener) {
        super(0, url, errorListener);
        Intrinsics.checkNotNullParameter(url, "url");
        Intrinsics.checkNotNullParameter(listener, "listener");
        Intrinsics.checkNotNullParameter(errorListener, "errorListener");
        this.f18667d = listener;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // com.android.volley.n
    public com.android.volley.p parseNetworkResponse(com.android.volley.k kVar) {
        byte[] bArr;
        if (kVar != null) {
            try {
                bArr = kVar.f9193b;
                if (bArr == null) {
                }
                com.android.volley.p c10 = com.android.volley.p.c(bArr, c6.e.e(kVar));
                Intrinsics.checkNotNull(c10);
                return c10;
            } catch (UnsupportedEncodingException e10) {
                com.android.volley.p a10 = com.android.volley.p.a(new com.android.volley.m(e10));
                Intrinsics.checkNotNull(a10);
                return a10;
            }
        }
        bArr = new byte[0];
        com.android.volley.p c102 = com.android.volley.p.c(bArr, c6.e.e(kVar));
        Intrinsics.checkNotNull(c102);
        return c102;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // com.android.volley.n
    public void deliverResponse(byte[] response) {
        Intrinsics.checkNotNullParameter(response, "response");
        this.f18667d.a(response);
    }
}
