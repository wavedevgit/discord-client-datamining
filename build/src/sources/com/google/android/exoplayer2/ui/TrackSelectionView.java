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
import le.l;
import le.m;
import le.o;
import qi.s;
import rd.u0;
@Deprecated
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class TrackSelectionView extends LinearLayout {

    /* renamed from: d  reason: collision with root package name */
    private final int f13915d;

    /* renamed from: e  reason: collision with root package name */
    private final LayoutInflater f13916e;

    /* renamed from: i  reason: collision with root package name */
    private final CheckedTextView f13917i;

    /* renamed from: o  reason: collision with root package name */
    private final CheckedTextView f13918o;

    /* renamed from: p  reason: collision with root package name */
    private final b f13919p;

    /* renamed from: q  reason: collision with root package name */
    private final List f13920q;

    /* renamed from: r  reason: collision with root package name */
    private final Map f13921r;

    /* renamed from: s  reason: collision with root package name */
    private boolean f13922s;

    /* renamed from: t  reason: collision with root package name */
    private boolean f13923t;

    /* renamed from: u  reason: collision with root package name */
    private o f13924u;

    /* renamed from: v  reason: collision with root package name */
    private CheckedTextView[][] f13925v;

    /* renamed from: w  reason: collision with root package name */
    private boolean f13926w;

    /* renamed from: x  reason: collision with root package name */
    private Comparator f13927x;

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
        public final Tracks.a f13929a;

        /* renamed from: b  reason: collision with root package name */
        public final int f13930b;

        public c(Tracks.a aVar, int i10) {
            this.f13929a = aVar;
            this.f13930b = i10;
        }

        public Format a() {
            return this.f13929a.c(this.f13930b);
        }
    }

    public TrackSelectionView(Context context, AttributeSet attributeSet) {
        this(context, attributeSet, 0);
    }

    public static Map b(Map map, List list, boolean z10) {
        HashMap hashMap = new HashMap();
        for (int i10 = 0; i10 < list.size(); i10++) {
            ke.o oVar = (ke.o) map.get(((Tracks.a) list.get(i10)).b());
            if (oVar != null && (z10 || hashMap.isEmpty())) {
                hashMap.put(oVar.f32287d, oVar);
            }
        }
        return hashMap;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void c(View view) {
        if (view == this.f13917i) {
            e();
        } else if (view == this.f13918o) {
            d();
        } else {
            f(view);
        }
        i();
    }

    private void d() {
        this.f13926w = false;
        this.f13921r.clear();
    }

    private void e() {
        this.f13926w = true;
        this.f13921r.clear();
    }

    private void f(View view) {
        boolean z10 = false;
        this.f13926w = false;
        c cVar = (c) oe.a.e(view.getTag());
        u0 b10 = cVar.f13929a.b();
        int i10 = cVar.f13930b;
        ke.o oVar = (ke.o) this.f13921r.get(b10);
        if (oVar == null) {
            if (!this.f13923t && this.f13921r.size() > 0) {
                this.f13921r.clear();
            }
            this.f13921r.put(b10, new ke.o(b10, s.u(Integer.valueOf(i10))));
            return;
        }
        ArrayList arrayList = new ArrayList(oVar.f32288e);
        boolean isChecked = ((CheckedTextView) view).isChecked();
        boolean g10 = g(cVar.f13929a);
        z10 = (g10 || h()) ? true : true;
        if (isChecked && z10) {
            arrayList.remove(Integer.valueOf(i10));
            if (arrayList.isEmpty()) {
                this.f13921r.remove(b10);
            } else {
                this.f13921r.put(b10, new ke.o(b10, arrayList));
            }
        } else if (!isChecked) {
            if (g10) {
                arrayList.add(Integer.valueOf(i10));
                this.f13921r.put(b10, new ke.o(b10, arrayList));
                return;
            }
            this.f13921r.put(b10, new ke.o(b10, s.u(Integer.valueOf(i10))));
        }
    }

    private boolean g(Tracks.a aVar) {
        if (this.f13922s && aVar.e()) {
            return true;
        }
        return false;
    }

    private boolean h() {
        if (this.f13923t && this.f13920q.size() > 1) {
            return true;
        }
        return false;
    }

    private void i() {
        boolean z10;
        this.f13917i.setChecked(this.f13926w);
        CheckedTextView checkedTextView = this.f13918o;
        if (!this.f13926w && this.f13921r.size() == 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        checkedTextView.setChecked(z10);
        for (int i10 = 0; i10 < this.f13925v.length; i10++) {
            ke.o oVar = (ke.o) this.f13921r.get(((Tracks.a) this.f13920q.get(i10)).b());
            int i11 = 0;
            while (true) {
                CheckedTextView[] checkedTextViewArr = this.f13925v[i10];
                if (i11 < checkedTextViewArr.length) {
                    if (oVar != null) {
                        this.f13925v[i10][i11].setChecked(oVar.f32288e.contains(Integer.valueOf(((c) oe.a.e(checkedTextViewArr[i11].getTag())).f13930b)));
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
        if (this.f13920q.isEmpty()) {
            this.f13917i.setEnabled(false);
            this.f13918o.setEnabled(false);
            return;
        }
        this.f13917i.setEnabled(true);
        this.f13918o.setEnabled(true);
        this.f13925v = new CheckedTextView[this.f13920q.size()];
        boolean h10 = h();
        for (int i11 = 0; i11 < this.f13920q.size(); i11++) {
            Tracks.a aVar = (Tracks.a) this.f13920q.get(i11);
            boolean g10 = g(aVar);
            CheckedTextView[][] checkedTextViewArr = this.f13925v;
            int i12 = aVar.f12628d;
            checkedTextViewArr[i11] = new CheckedTextView[i12];
            c[] cVarArr = new c[i12];
            for (int i13 = 0; i13 < aVar.f12628d; i13++) {
                cVarArr[i13] = new c(aVar, i13);
            }
            Comparator comparator = this.f13927x;
            if (comparator != null) {
                Arrays.sort(cVarArr, comparator);
            }
            for (int i14 = 0; i14 < i12; i14++) {
                if (i14 == 0) {
                    addView(this.f13916e.inflate(l.f36329a, (ViewGroup) this, false));
                }
                if (!g10 && !h10) {
                    i10 = 17367055;
                } else {
                    i10 = 17367056;
                }
                CheckedTextView checkedTextView = (CheckedTextView) this.f13916e.inflate(i10, (ViewGroup) this, false);
                checkedTextView.setBackgroundResource(this.f13915d);
                checkedTextView.setText(this.f13924u.a(cVarArr[i14].a()));
                checkedTextView.setTag(cVarArr[i14]);
                if (aVar.h(i14)) {
                    checkedTextView.setFocusable(true);
                    checkedTextView.setOnClickListener(this.f13919p);
                } else {
                    checkedTextView.setFocusable(false);
                    checkedTextView.setEnabled(false);
                }
                this.f13925v[i11][i14] = checkedTextView;
                addView(checkedTextView);
            }
        }
        i();
    }

    public boolean getIsDisabled() {
        return this.f13926w;
    }

    public Map<u0, ke.o> getOverrides() {
        return this.f13921r;
    }

    public void setAllowAdaptiveSelections(boolean z10) {
        if (this.f13922s != z10) {
            this.f13922s = z10;
            j();
        }
    }

    public void setAllowMultipleOverrides(boolean z10) {
        if (this.f13923t != z10) {
            this.f13923t = z10;
            if (!z10 && this.f13921r.size() > 1) {
                Map b10 = b(this.f13921r, this.f13920q, false);
                this.f13921r.clear();
                this.f13921r.putAll(b10);
            }
            j();
        }
    }

    public void setShowDisableOption(boolean z10) {
        int i10;
        CheckedTextView checkedTextView = this.f13917i;
        if (z10) {
            i10 = 0;
        } else {
            i10 = 8;
        }
        checkedTextView.setVisibility(i10);
    }

    public void setTrackNameProvider(o oVar) {
        this.f13924u = (o) oe.a.e(oVar);
        j();
    }

    public TrackSelectionView(Context context, AttributeSet attributeSet, int i10) {
        super(context, attributeSet, i10);
        setOrientation(1);
        setSaveFromParentEnabled(false);
        TypedArray obtainStyledAttributes = context.getTheme().obtainStyledAttributes(new int[]{16843534});
        int resourceId = obtainStyledAttributes.getResourceId(0, 0);
        this.f13915d = resourceId;
        obtainStyledAttributes.recycle();
        LayoutInflater from = LayoutInflater.from(context);
        this.f13916e = from;
        b bVar = new b();
        this.f13919p = bVar;
        this.f13924u = new le.e(getResources());
        this.f13920q = new ArrayList();
        this.f13921r = new HashMap();
        CheckedTextView checkedTextView = (CheckedTextView) from.inflate(17367055, (ViewGroup) this, false);
        this.f13917i = checkedTextView;
        checkedTextView.setBackgroundResource(resourceId);
        checkedTextView.setText(m.f36348q);
        checkedTextView.setEnabled(false);
        checkedTextView.setFocusable(true);
        checkedTextView.setOnClickListener(bVar);
        checkedTextView.setVisibility(8);
        addView(checkedTextView);
        addView(from.inflate(l.f36329a, (ViewGroup) this, false));
        CheckedTextView checkedTextView2 = (CheckedTextView) from.inflate(17367055, (ViewGroup) this, false);
        this.f13918o = checkedTextView2;
        checkedTextView2.setBackgroundResource(resourceId);
        checkedTextView2.setText(m.f36347p);
        checkedTextView2.setEnabled(false);
        checkedTextView2.setFocusable(true);
        checkedTextView2.setOnClickListener(bVar);
        addView(checkedTextView2);
    }
}
