package com.google.android.exoplayer2.text;

import android.os.Bundle;
import com.google.android.exoplayer2.g;
import com.google.android.exoplayer2.text.CueGroup;
import java.util.ArrayList;
import java.util.List;
import ne.d;
import ne.w0;
import ni.s;
import zd.b;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class CueGroup implements g {

    /* renamed from: i  reason: collision with root package name */
    public static final CueGroup f12934i = new CueGroup(s.t(), 0);

    /* renamed from: o  reason: collision with root package name */
    private static final String f12935o = w0.B0(0);

    /* renamed from: p  reason: collision with root package name */
    private static final String f12936p = w0.B0(1);

    /* renamed from: q  reason: collision with root package name */
    public static final g.a f12937q = new g.a() { // from class: zd.d
        @Override // com.google.android.exoplayer2.g.a
        public final com.google.android.exoplayer2.g a(Bundle bundle) {
            CueGroup b10;
            b10 = CueGroup.b(bundle);
            return b10;
        }
    };

    /* renamed from: d  reason: collision with root package name */
    public final s f12938d;

    /* renamed from: e  reason: collision with root package name */
    public final long f12939e;

    public CueGroup(List list, long j10) {
        this.f12938d = s.o(list);
        this.f12939e = j10;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final CueGroup b(Bundle bundle) {
        s d10;
        ArrayList parcelableArrayList = bundle.getParcelableArrayList(f12935o);
        if (parcelableArrayList == null) {
            d10 = s.t();
        } else {
            d10 = d.d(b.U, parcelableArrayList);
        }
        return new CueGroup(d10, bundle.getLong(f12936p));
    }
}
