package com.linkedin.android.litr;

import com.linkedin.android.litr.io.MediaRange;
import java.util.List;
import kotlin.jvm.internal.LongCompanionObject;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class d {

    /* renamed from: a  reason: collision with root package name */
    public final int f18101a;

    /* renamed from: b  reason: collision with root package name */
    public final List f18102b;

    /* renamed from: c  reason: collision with root package name */
    public final List f18103c;

    /* renamed from: d  reason: collision with root package name */
    public final MediaRange f18104d;

    /* renamed from: e  reason: collision with root package name */
    public final boolean f18105e;

    /* renamed from: f  reason: collision with root package name */
    public final boolean f18106f;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class b {

        /* renamed from: a  reason: collision with root package name */
        private int f18107a = 100;

        /* renamed from: b  reason: collision with root package name */
        private List f18108b;

        /* renamed from: c  reason: collision with root package name */
        private List f18109c;

        /* renamed from: d  reason: collision with root package name */
        private MediaRange f18110d;

        /* renamed from: e  reason: collision with root package name */
        private boolean f18111e;

        /* renamed from: f  reason: collision with root package name */
        private boolean f18112f;

        public d a() {
            return new d(this.f18107a, this.f18108b, this.f18109c, this.f18110d, this.f18111e, this.f18112f);
        }

        public b b(int i10) {
            this.f18107a = i10;
            return this;
        }

        public b c(boolean z10) {
            this.f18112f = z10;
            return this;
        }
    }

    private d(int i10, List list, List list2, MediaRange mediaRange, boolean z10, boolean z11) {
        this.f18101a = i10;
        this.f18102b = list;
        this.f18103c = list2;
        this.f18104d = mediaRange == null ? new MediaRange(0L, LongCompanionObject.MAX_VALUE) : mediaRange;
        this.f18105e = z10;
        this.f18106f = z11;
    }
}
