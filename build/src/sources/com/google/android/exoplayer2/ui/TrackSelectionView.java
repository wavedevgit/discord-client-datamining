package com.google.android.exoplayer2.ui;

import android.content.Context;
import android.content.res.TypedArray;
import android.util.AttributeSet;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.CheckedTextView;
import android.widget.LinearLayout;
import com.google.android.exoplayer2.Format;
import com.google.android.exoplayer2.Tracks;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Comparator;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import ji.s;
import ke.l;
import ke.m;
import ke.o;
import qd.u0;
@Deprecated
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class TrackSelectionView extends LinearLayout {

    /* renamed from: d  reason: collision with root package name */
    private final int f12851d;

    /* renamed from: e  reason: collision with root package name */
    private final LayoutInflater f12852e;

    /* renamed from: i  reason: collision with root package name */
    private final CheckedTextView f12853i;

    /* renamed from: o  reason: collision with root package name */
    private final CheckedTextView f12854o;

    /* renamed from: p  reason: collision with root package name */
    private final b f12855p;

    /* renamed from: q  reason: collision with root package name */
    private final List f12856q;

    /* renamed from: r  reason: collision with root package name */
    private final Map f12857r;

    /* renamed from: s  reason: collision with root package name */
    private boolean f12858s;

    /* renamed from: t  reason: collision with root package name */
    private boolean f12859t;

    /* renamed from: u  reason: collision with root package name */
    private o f12860u;

    /* renamed from: v  reason: collision with root package name */
    private CheckedTextView[][] f12861v;

    /* renamed from: w  reason: collision with root package name */
    private boolean f12862w;

    /* renamed from: x  reason: collision with root package name */
    private Comparator f12863x;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public class b implements View.OnClickListener {
        private b() {
        }

        @Override // android.view.View.OnClickListener
        public void onClick(View view) {
            TrackSelectionView.this.c(view);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class c {

        /* renamed from: a  reason: collision with root package name */
        public final Tracks.a f12865a;

        /* renamed from: b  reason: collision with root package name */
        public final int f12866b;

        public c(Tracks.a aVar, int i10) {
            this.f12865a = aVar;
            this.f12866b = i10;
        }

        public Format a() {
            return this.f12865a.c(this.f12866b);
        }
    }

    public TrackSelectionView(Context context, AttributeSet attributeSet) {
        this(context, attributeSet, 0);
    }

    public static Map b(Map map, List list, boolean z10) {
        HashMap hashMap = new HashMap();
        for (int i10 = 0; i10 < list.size(); i10++) {
            je.o oVar = (je.o) map.get(((Tracks.a) list.get(i10)).b());
            if (oVar != null && (z10 || hashMap.isEmpty())) {
                hashMap.put(oVar.f31539d, oVar);
            }
        }
        return hashMap;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void c(View view) {
        if (view == this.f12853i) {
            e();
        } else if (view == this.f12854o) {
            d();
        } else {
            f(view);
        }
        i();
    }

    private void d() {
        this.f12862w = false;
        this.f12857r.clear();
    }

    private void e() {
        this.f12862w = true;
        this.f12857r.clear();
    }

    private void f(View view) {
        boolean z10 = false;
        this.f12862w = false;
        c cVar = (c) ne.a.e(view.getTag());
        u0 b10 = cVar.f12865a.b();
        int i10 = cVar.f12866b;
        je.o oVar = (je.o) this.f12857r.get(b10);
        if (oVar == null) {
            if (!this.f12859t && this.f12857r.size() > 0) {
                this.f12857r.clear();
            }
            this.f12857r.put(b10, new je.o(b10, s.s(Integer.valueOf(i10))));
            return;
        }
        ArrayList arrayList = new ArrayList(oVar.f31540e);
        boolean isChecked = ((CheckedTextView) view).isChecked();
        boolean g10 = g(cVar.f12865a);
        z10 = (g10 || h()) ? true : true;
        if (isChecked && z10) {
            arrayList.remove(Integer.valueOf(i10));
            if (arrayList.isEmpty()) {
                this.f12857r.remove(b10);
            } else {
                this.f12857r.put(b10, new je.o(b10, arrayList));
            }
        } else if (!isChecked) {
            if (g10) {
                arrayList.add(Integer.valueOf(i10));
                this.f12857r.put(b10, new je.o(b10, arrayList));
                return;
            }
            this.f12857r.put(b10, new je.o(b10, s.s(Integer.valueOf(i10))));
        }
    }

    private boolean g(Tracks.a aVar) {
        if (this.f12858s && aVar.e()) {
            return true;
        }
        return false;
    }

    private boolean h() {
        if (this.f12859t && this.f12856q.size() > 1) {
            return true;
        }
        return false;
    }

    private void i() {
        boolean z10;
        this.f12853i.setChecked(this.f12862w);
        CheckedTextView checkedTextView = this.f12854o;
        if (!this.f12862w && this.f12857r.size() == 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        checkedTextView.setChecked(z10);
        for (int i10 = 0; i10 < this.f12861v.length; i10++) {
            je.o oVar = (je.o) this.f12857r.get(((Tracks.a) this.f12856q.get(i10)).b());
            int i11 = 0;
            while (true) {
                CheckedTextView[] checkedTextViewArr = this.f12861v[i10];
                if (i11 < checkedTextViewArr.length) {
                    if (oVar != null) {
                        this.f12861v[i10][i11].setChecked(oVar.f31540e.contains(Integer.valueOf(((c) ne.a.e(checkedTextViewArr[i11].getTag())).f12866b)));
                    } else {
                        checkedTextViewArr[i11].setChecked(false);
                    }
                    i11++;
                }
            }
        }
    }

    private void j() {
        int i10;
        for (int childCount = getChildCount() - 1; childCount >= 3; childCount--) {
            removeViewAt(childCount);
        }
        if (this.f12856q.isEmpty()) {
            this.f12853i.setEnabled(false);
            this.f12854o.setEnabled(false);
            return;
        }
        this.f12853i.setEnabled(true);
        this.f12854o.setEnabled(true);
        this.f12861v = new CheckedTextView[this.f12856q.size()];
        boolean h10 = h();
        for (int i11 = 0; i11 < this.f12856q.size(); i11++) {
            Tracks.a aVar = (Tracks.a) this.f12856q.get(i11);
            boolean g10 = g(aVar);
            CheckedTextView[][] checkedTextViewArr = this.f12861v;
            int i12 = aVar.f11626d;
            checkedTextViewArr[i11] = new CheckedTextView[i12];
            c[] cVarArr = new c[i12];
            for (int i13 = 0; i13 < aVar.f11626d; i13++) {
                cVarArr[i13] = new c(aVar, i13);
            }
            Comparator comparator = this.f12863x;
            if (comparator != null) {
                Arrays.sort(cVarArr, comparator);
            }
            for (int i14 = 0; i14 < i12; i14++) {
                if (i14 == 0) {
                    addView(this.f12852e.inflate(l.f32288a, (ViewGroup) this, false));
                }
                if (!g10 && !h10) {
                    i10 = 17367055;
                } else {
                    i10 = 17367056;
                }
                CheckedTextView checkedTextView = (CheckedTextView) this.f12852e.inflate(i10, (ViewGroup) this, false);
                checkedTextView.setBackgroundResource(this.f12851d);
                checkedTextView.setText(this.f12860u.a(cVarArr[i14].a()));
                checkedTextView.setTag(cVarArr[i14]);
                if (aVar.h(i14)) {
                    checkedTextView.setFocusable(true);
                    checkedTextView.setOnClickListener(this.f12855p);
                } else {
                    checkedTextView.setFocusable(false);
                    checkedTextView.setEnabled(false);
                }
                this.f12861v[i11][i14] = checkedTextView;
                addView(checkedTextView);
            }
        }
        i();
    }

    public boolean getIsDisabled() {
        return this.f12862w;
    }

    public Map<u0, je.o> getOverrides() {
        return this.f12857r;
    }

    public void setAllowAdaptiveSelections(boolean z10) {
        if (this.f12858s != z10) {
            this.f12858s = z10;
            j();
        }
    }

    public void setAllowMultipleOverrides(boolean z10) {
        if (this.f12859t != z10) {
            this.f12859t = z10;
            if (!z10 && this.f12857r.size() > 1) {
                Map b10 = b(this.f12857r, this.f12856q, false);
                this.f12857r.clear();
                this.f12857r.putAll(b10);
            }
            j();
        }
    }

    public void setShowDisableOption(boolean z10) {
        int i10;
        CheckedTextView checkedTextView = this.f12853i;
        if (z10) {
            i10 = 0;
        } else {
            i10 = 8;
        }
        checkedTextView.setVisibility(i10);
    }

    public void setTrackNameProvider(o oVar) {
        this.f12860u = (o) ne.a.e(oVar);
        j();
    }

    public TrackSelectionView(Context context, AttributeSet attributeSet, int i10) {
        super(context, attributeSet, i10);
        setOrientation(1);
        setSaveFromParentEnabled(false);
        TypedArray obtainStyledAttributes = context.getTheme().obtainStyledAttributes(new int[]{16843534});
        int resourceId = obtainStyledAttributes.getResourceId(0, 0);
        this.f12851d = resourceId;
        obtainStyledAttributes.recycle();
        LayoutInflater from = LayoutInflater.from(context);
        this.f12852e = from;
        b bVar = new b();
        this.f12855p = bVar;
        this.f12860u = new ke.e(getResources());
        this.f12856q = new ArrayList();
        this.f12857r = new HashMap();
        CheckedTextView checkedTextView = (CheckedTextView) from.inflate(17367055, (ViewGroup) this, false);
        this.f12853i = checkedTextView;
        checkedTextView.setBackgroundResource(resourceId);
        checkedTextView.setText(m.f32307q);
        checkedTextView.setEnabled(false);
        checkedTextView.setFocusable(true);
        checkedTextView.setOnClickListener(bVar);
        checkedTextView.setVisibility(8);
        addView(checkedTextView);
        addView(from.inflate(l.f32288a, (ViewGroup) this, false));
        CheckedTextView checkedTextView2 = (CheckedTextView) from.inflate(17367055, (ViewGroup) this, false);
        this.f12854o = checkedTextView2;
        checkedTextView2.setBackgroundResource(resourceId);
        checkedTextView2.setText(m.f32306p);
        checkedTextView2.setEnabled(false);
        checkedTextView2.setFocusable(true);
        checkedTextView2.setOnClickListener(bVar);
        addView(checkedTextView2);
    }
}
