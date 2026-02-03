package com.linkedin.android.litr;

import com.linkedin.android.litr.io.MediaRange;
import java.util.List;
import kotlin.jvm.internal.LongCompanionObject;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class d {

    /* renamed from: a  reason: collision with root package name */
    public final int f16837a;

    /* renamed from: b  reason: collision with root package name */
    public final List f16838b;

    /* renamed from: c  reason: collision with root package name */
    public final List f16839c;

    /* renamed from: d  reason: collision with root package name */
    public final MediaRange f16840d;

    /* renamed from: e  reason: collision with root package name */
    public final boolean f16841e;

    /* renamed from: f  reason: collision with root package name */
    public final boolean f16842f;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class b {

        /* renamed from: a  reason: collision with root package name */
        private int f16843a = 100;

        /* renamed from: b  reason: collision with root package name */
        private List f16844b;

        /* renamed from: c  reason: collision with root package name */
        private List f16845c;

        /* renamed from: d  reason: collision with root package name */
        private MediaRange f16846d;

        /* renamed from: e  reason: collision with root package name */
        private boolean f16847e;

        /* renamed from: f  reason: collision with root package name */
        private boolean f16848f;

        public d a() {
            return new d(this.f16843a, this.f16844b, this.f16845c, this.f16846d, this.f16847e, this.f16848f);
        }

        public b b(int i10) {
            this.f16843a = i10;
            return this;
        }

        public b c(boolean z10) {
            this.f16848f = z10;
            return this;
        }
    }

    private d(int i10, List list, List list2, MediaRange mediaRange, boolean z10, boolean z11) {
        this.f16837a = i10;
        this.f16838b = list;
        this.f16839c = list2;
        this.f16840d = mediaRange == null ? new MediaRange(0L, LongCompanionObject.MAX_VALUE) : mediaRange;
        this.f16841e = z10;
        this.f16842f = z11;
    }
}
