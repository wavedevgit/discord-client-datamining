package com.linkedin.android.litr;

import com.linkedin.android.litr.io.MediaRange;
import java.util.List;
import kotlin.jvm.internal.LongCompanionObject;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class d {

    /* renamed from: a  reason: collision with root package name */
    public final int f17231a;

    /* renamed from: b  reason: collision with root package name */
    public final List f17232b;

    /* renamed from: c  reason: collision with root package name */
    public final List f17233c;

    /* renamed from: d  reason: collision with root package name */
    public final MediaRange f17234d;

    /* renamed from: e  reason: collision with root package name */
    public final boolean f17235e;

    /* renamed from: f  reason: collision with root package name */
    public final boolean f17236f;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class b {

        /* renamed from: a  reason: collision with root package name */
        private int f17237a = 100;

        /* renamed from: b  reason: collision with root package name */
        private List f17238b;

        /* renamed from: c  reason: collision with root package name */
        private List f17239c;

        /* renamed from: d  reason: collision with root package name */
        private MediaRange f17240d;

        /* renamed from: e  reason: collision with root package name */
        private boolean f17241e;

        /* renamed from: f  reason: collision with root package name */
        private boolean f17242f;

        public d a() {
            return new d(this.f17237a, this.f17238b, this.f17239c, this.f17240d, this.f17241e, this.f17242f);
        }

        public b b(int i10) {
            this.f17237a = i10;
            return this;
        }

        public b c(boolean z10) {
            this.f17242f = z10;
            return this;
        }
    }

    private d(int i10, List list, List list2, MediaRange mediaRange, boolean z10, boolean z11) {
        this.f17231a = i10;
        this.f17232b = list;
        this.f17233c = list2;
        this.f17234d = mediaRange == null ? new MediaRange(0L, LongCompanionObject.MAX_VALUE) : mediaRange;
        this.f17235e = z10;
        this.f17236f = z11;
    }
}
