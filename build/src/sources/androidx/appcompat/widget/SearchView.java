package androidx.appcompat.widget;

import android.app.PendingIntent;
import android.app.SearchableInfo;
import android.content.ActivityNotFoundException;
import android.content.ComponentName;
import android.content.Context;
import android.content.Intent;
import android.content.res.Configuration;
import android.content.res.Resources;
import android.database.Cursor;
import android.graphics.Rect;
import android.graphics.drawable.Drawable;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.os.Parcel;
import android.os.Parcelable;
import android.text.Editable;
import android.text.SpannableStringBuilder;
import android.text.TextUtils;
import android.text.TextWatcher;
import android.text.style.ImageSpan;
import android.util.AttributeSet;
import android.util.Log;
import android.util.TypedValue;
import android.view.KeyEvent;
import android.view.LayoutInflater;
import android.view.MotionEvent;
import android.view.TouchDelegate;
import android.view.View;
import android.view.ViewConfiguration;
import android.view.ViewGroup;
import android.view.inputmethod.EditorInfo;
import android.view.inputmethod.InputConnection;
import android.view.inputmethod.InputMethodManager;
import android.widget.AdapterView;
import android.widget.AutoCompleteTextView;
import android.widget.ImageView;
import android.widget.TextView;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import java.lang.reflect.Method;
import java.util.WeakHashMap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class SearchView extends i0 implements androidx.appcompat.view.b {
    static final o A0;
    final SearchAutoComplete A;
    private final View B;
    private final View C;
    private final View D;
    final ImageView E;
    final ImageView F;
    final ImageView G;
    final ImageView H;
    private final View I;
    private q J;
    private Rect K;
    private Rect L;
    private int[] M;
    private int[] N;
    private final ImageView O;
    private final Drawable P;
    private final int Q;
    private final int R;
    private final Intent S;
    private final Intent T;
    private final CharSequence U;
    private m V;
    private l W;

    /* renamed from: a0  reason: collision with root package name */
    View.OnFocusChangeListener f1520a0;

    /* renamed from: b0  reason: collision with root package name */
    private View.OnClickListener f1521b0;

    /* renamed from: c0  reason: collision with root package name */
    private boolean f1522c0;

    /* renamed from: d0  reason: collision with root package name */
    private boolean f1523d0;

    /* renamed from: e0  reason: collision with root package name */
    s2.a f1524e0;

    /* renamed from: f0  reason: collision with root package name */
    private boolean f1525f0;

    /* renamed from: g0  reason: collision with root package name */
    private CharSequence f1526g0;

    /* renamed from: h0  reason: collision with root package name */
    private boolean f1527h0;

    /* renamed from: i0  reason: collision with root package name */
    private boolean f1528i0;

    /* renamed from: j0  reason: collision with root package name */
    private int f1529j0;

    /* renamed from: k0  reason: collision with root package name */
    private boolean f1530k0;

    /* renamed from: l0  reason: collision with root package name */
    private CharSequence f1531l0;

    /* renamed from: m0  reason: collision with root package name */
    private CharSequence f1532m0;

    /* renamed from: n0  reason: collision with root package name */
    private boolean f1533n0;

    /* renamed from: o0  reason: collision with root package name */
    private int f1534o0;

    /* renamed from: p0  reason: collision with root package name */
    SearchableInfo f1535p0;

    /* renamed from: q0  reason: collision with root package name */
    private Bundle f1536q0;

    /* renamed from: r0  reason: collision with root package name */
    private final Runnable f1537r0;

    /* renamed from: s0  reason: collision with root package name */
    private Runnable f1538s0;

    /* renamed from: t0  reason: collision with root package name */
    private final WeakHashMap f1539t0;

    /* renamed from: u0  reason: collision with root package name */
    private final View.OnClickListener f1540u0;

    /* renamed from: v0  reason: collision with root package name */
    View.OnKeyListener f1541v0;

    /* renamed from: w0  reason: collision with root package name */
    private final TextView.OnEditorActionListener f1542w0;

    /* renamed from: x0  reason: collision with root package name */
    private final AdapterView.OnItemClickListener f1543x0;

    /* renamed from: y0  reason: collision with root package name */
    private final AdapterView.OnItemSelectedListener f1544y0;

    /* renamed from: z0  reason: collision with root package name */
    private TextWatcher f1545z0;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class SearchAutoComplete extends androidx.appcompat.widget.d {

        /* renamed from: p  reason: collision with root package name */
        private int f1546p;

        /* renamed from: q  reason: collision with root package name */
        private SearchView f1547q;

        /* renamed from: r  reason: collision with root package name */
        private boolean f1548r;

        /* renamed from: s  reason: collision with root package name */
        final Runnable f1549s;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        class a implements Runnable {
            a() {
            }

            @Override // java.lang.Runnable
            public void run() {
                SearchAutoComplete.this.d();
            }
        }

        public SearchAutoComplete(Context context, AttributeSet attributeSet) {
            this(context, attributeSet, f.a.f23292m);
        }

        private int getSearchViewTextMinWidthDp() {
            Configuration configuration = getResources().getConfiguration();
            int i10 = configuration.screenWidthDp;
            int i11 = configuration.screenHeightDp;
            if (i10 >= 960 && i11 >= 720 && configuration.orientation == 2) {
                return IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER;
            }
            if (i10 < 600) {
                if (i10 < 640 || i11 < 480) {
                    return 160;
                }
                return 192;
            }
            return 192;
        }

        void b() {
            if (Build.VERSION.SDK_INT >= 29) {
                k.b(this, 1);
                if (enoughToFilter()) {
                    showDropDown();
                    return;
                }
                return;
            }
            SearchView.A0.c(this);
        }

        boolean c() {
            if (TextUtils.getTrimmedLength(getText()) == 0) {
                return true;
            }
            return false;
        }

        void d() {
            if (this.f1548r) {
                ((InputMethodManager) getContext().getSystemService("input_method")).showSoftInput(this, 0);
                this.f1548r = false;
            }
        }

        @Override // android.widget.AutoCompleteTextView
        public boolean enoughToFilter() {
            if (this.f1546p > 0 && !super.enoughToFilter()) {
                return false;
            }
            return true;
        }

        @Override // androidx.appcompat.widget.d, android.widget.TextView, android.view.View
        public InputConnection onCreateInputConnection(EditorInfo editorInfo) {
            InputConnection onCreateInputConnection = super.onCreateInputConnection(editorInfo);
            if (this.f1548r) {
                removeCallbacks(this.f1549s);
                post(this.f1549s);
            }
            return onCreateInputConnection;
        }

        @Override // android.view.View
        protected void onFinishInflate() {
            super.onFinishInflate();
            setMinWidth((int) TypedValue.applyDimension(1, getSearchViewTextMinWidthDp(), getResources().getDisplayMetrics()));
        }

        @Override // android.widget.AutoCompleteTextView, android.widget.TextView, android.view.View
        protected void onFocusChanged(boolean z10, int i10, Rect rect) {
            super.onFocusChanged(z10, i10, rect);
            this.f1547q.X();
        }

        @Override // android.widget.AutoCompleteTextView, android.widget.TextView, android.view.View
        public boolean onKeyPreIme(int i10, KeyEvent keyEvent) {
            if (i10 == 4) {
                if (keyEvent.getAction() == 0 && keyEvent.getRepeatCount() == 0) {
                    KeyEvent.DispatcherState keyDispatcherState = getKeyDispatcherState();
                    if (keyDispatcherState != null) {
                        keyDispatcherState.startTracking(keyEvent, this);
                    }
                    return true;
                } else if (keyEvent.getAction() == 1) {
                    KeyEvent.DispatcherState keyDispatcherState2 = getKeyDispatcherState();
                    if (keyDispatcherState2 != null) {
                        keyDispatcherState2.handleUpEvent(keyEvent);
                    }
                    if (keyEvent.isTracking() && !keyEvent.isCanceled()) {
                        this.f1547q.clearFocus();
                        setImeVisibility(false);
                        return true;
                    }
                }
            }
            return super.onKeyPreIme(i10, keyEvent);
        }

        @Override // android.widget.AutoCompleteTextView, android.widget.TextView, android.view.View
        public void onWindowFocusChanged(boolean z10) {
            super.onWindowFocusChanged(z10);
            if (z10 && this.f1547q.hasFocus() && getVisibility() == 0) {
                this.f1548r = true;
                if (SearchView.K(getContext())) {
                    b();
                }
            }
        }

        @Override // android.widget.AutoCompleteTextView
        public void performCompletion() {
        }

        @Override // android.widget.AutoCompleteTextView
        protected void replaceText(CharSequence charSequence) {
        }

        void setImeVisibility(boolean z10) {
            InputMethodManager inputMethodManager = (InputMethodManager) getContext().getSystemService("input_method");
            if (!z10) {
                this.f1548r = false;
                removeCallbacks(this.f1549s);
                inputMethodManager.hideSoftInputFromWindow(getWindowToken(), 0);
            } else if (inputMethodManager.isActive(this)) {
                this.f1548r = false;
                removeCallbacks(this.f1549s);
                inputMethodManager.showSoftInput(this, 0);
            } else {
                this.f1548r = true;
            }
        }

        void setSearchView(SearchView searchView) {
            this.f1547q = searchView;
        }

        @Override // android.widget.AutoCompleteTextView
        public void setThreshold(int i10) {
            super.setThreshold(i10);
            this.f1546p = i10;
        }

        public SearchAutoComplete(Context context, AttributeSet attributeSet, int i10) {
            super(context, attributeSet, i10);
            this.f1549s = new a();
            this.f1546p = getThreshold();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class a implements TextWatcher {
        a() {
        }

        @Override // android.text.TextWatcher
        public void afterTextChanged(Editable editable) {
        }

        @Override // android.text.TextWatcher
        public void beforeTextChanged(CharSequence charSequence, int i10, int i11, int i12) {
        }

        @Override // android.text.TextWatcher
        public void onTextChanged(CharSequence charSequence, int i10, int i11, int i12) {
            SearchView.this.W(charSequence);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class b implements Runnable {
        b() {
        }

        @Override // java.lang.Runnable
        public void run() {
            SearchView.this.d0();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class c implements Runnable {
        c() {
        }

        @Override // java.lang.Runnable
        public void run() {
            s2.a aVar = SearchView.this.f1524e0;
            if (aVar instanceof q0) {
                aVar.a(null);
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class d implements View.OnFocusChangeListener {
        d() {
        }

        @Override // android.view.View.OnFocusChangeListener
        public void onFocusChange(View view, boolean z10) {
            SearchView searchView = SearchView.this;
            View.OnFocusChangeListener onFocusChangeListener = searchView.f1520a0;
            if (onFocusChangeListener != null) {
                onFocusChangeListener.onFocusChange(searchView, z10);
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class e implements View.OnLayoutChangeListener {
        e() {
        }

        @Override // android.view.View.OnLayoutChangeListener
        public void onLayoutChange(View view, int i10, int i11, int i12, int i13, int i14, int i15, int i16, int i17) {
            SearchView.this.z();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class f implements View.OnClickListener {
        f() {
        }

        @Override // android.view.View.OnClickListener
        public void onClick(View view) {
            SearchView searchView = SearchView.this;
            if (view == searchView.E) {
                searchView.T();
            } else if (view == searchView.G) {
                searchView.P();
            } else if (view == searchView.F) {
                searchView.U();
            } else if (view == searchView.H) {
                searchView.Y();
            } else if (view == searchView.A) {
                searchView.F();
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class g implements View.OnKeyListener {
        g() {
        }

        @Override // android.view.View.OnKeyListener
        public boolean onKey(View view, int i10, KeyEvent keyEvent) {
            SearchView searchView = SearchView.this;
            if (searchView.f1535p0 == null) {
                return false;
            }
            if (searchView.A.isPopupShowing() && SearchView.this.A.getListSelection() != -1) {
                return SearchView.this.V(view, i10, keyEvent);
            }
            if (SearchView.this.A.c() || !keyEvent.hasNoModifiers() || keyEvent.getAction() != 1 || i10 != 66) {
                return false;
            }
            view.cancelLongPress();
            SearchView searchView2 = SearchView.this;
            searchView2.N(0, null, searchView2.A.getText().toString());
            return true;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class h implements TextView.OnEditorActionListener {
        h() {
        }

        @Override // android.widget.TextView.OnEditorActionListener
        public boolean onEditorAction(TextView textView, int i10, KeyEvent keyEvent) {
            SearchView.this.U();
            return true;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class i implements AdapterView.OnItemClickListener {
        i() {
        }

        @Override // android.widget.AdapterView.OnItemClickListener
        public void onItemClick(AdapterView adapterView, View view, int i10, long j10) {
            SearchView.this.Q(i10, 0, null);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class j implements AdapterView.OnItemSelectedListener {
        j() {
        }

        @Override // android.widget.AdapterView.OnItemSelectedListener
        public void onItemSelected(AdapterView adapterView, View view, int i10, long j10) {
            SearchView.this.R(i10);
        }

        @Override // android.widget.AdapterView.OnItemSelectedListener
        public void onNothingSelected(AdapterView adapterView) {
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class k {
        static void a(AutoCompleteTextView autoCompleteTextView) {
            autoCompleteTextView.refreshAutoCompleteResults();
        }

        static void b(SearchAutoComplete searchAutoComplete, int i10) {
            searchAutoComplete.setInputMethodMode(i10);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface l {
        boolean a();
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface m {
        boolean a(String str);

        boolean b(String str);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface n {
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class o {

        /* renamed from: a  reason: collision with root package name */
        private Method f1561a;

        /* renamed from: b  reason: collision with root package name */
        private Method f1562b;

        /* renamed from: c  reason: collision with root package name */
        private Method f1563c;

        o() {
            this.f1561a = null;
            this.f1562b = null;
            this.f1563c = null;
            d();
            try {
                Method declaredMethod = AutoCompleteTextView.class.getDeclaredMethod("doBeforeTextChanged", null);
                this.f1561a = declaredMethod;
                declaredMethod.setAccessible(true);
            } catch (NoSuchMethodException unused) {
            }
            try {
                Method declaredMethod2 = AutoCompleteTextView.class.getDeclaredMethod("doAfterTextChanged", null);
                this.f1562b = declaredMethod2;
                declaredMethod2.setAccessible(true);
            } catch (NoSuchMethodException unused2) {
            }
            try {
                Method method = AutoCompleteTextView.class.getMethod("ensureImeVisible", Boolean.TYPE);
                this.f1563c = method;
                method.setAccessible(true);
            } catch (NoSuchMethodException unused3) {
            }
        }

        private static void d() {
            if (Build.VERSION.SDK_INT < 29) {
                return;
            }
            throw new UnsupportedClassVersionError("This function can only be used for API Level < 29.");
        }

        void a(AutoCompleteTextView autoCompleteTextView) {
            d();
            Method method = this.f1562b;
            if (method != null) {
                try {
                    method.invoke(autoCompleteTextView, null);
                } catch (Exception unused) {
                }
            }
        }

        void b(AutoCompleteTextView autoCompleteTextView) {
            d();
            Method method = this.f1561a;
            if (method != null) {
                try {
                    method.invoke(autoCompleteTextView, null);
                } catch (Exception unused) {
                }
            }
        }

        void c(AutoCompleteTextView autoCompleteTextView) {
            d();
            Method method = this.f1563c;
            if (method != null) {
                try {
                    method.invoke(autoCompleteTextView, Boolean.TRUE);
                } catch (Exception unused) {
                }
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class p extends u2.a {
        public static final Parcelable.Creator<p> CREATOR = new a();

        /* renamed from: i  reason: collision with root package name */
        boolean f1564i;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        class a implements Parcelable.ClassLoaderCreator {
            a() {
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public p createFromParcel(Parcel parcel) {
                return new p(parcel, null);
            }

            @Override // android.os.Parcelable.ClassLoaderCreator
            /* renamed from: b */
            public p createFromParcel(Parcel parcel, ClassLoader classLoader) {
                return new p(parcel, classLoader);
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: c */
            public p[] newArray(int i10) {
                return new p[i10];
            }
        }

        p(Parcelable parcelable) {
            super(parcelable);
        }

        public String toString() {
            return "SearchView.SavedState{" + Integer.toHexString(System.identityHashCode(this)) + " isIconified=" + this.f1564i + "}";
        }

        @Override // u2.a, android.os.Parcelable
        public void writeToParcel(Parcel parcel, int i10) {
            super.writeToParcel(parcel, i10);
            parcel.writeValue(Boolean.valueOf(this.f1564i));
        }

        public p(Parcel parcel, ClassLoader classLoader) {
            super(parcel, classLoader);
            this.f1564i = ((Boolean) parcel.readValue(null)).booleanValue();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static class q extends TouchDelegate {

        /* renamed from: a  reason: collision with root package name */
        private final View f1565a;

        /* renamed from: b  reason: collision with root package name */
        private final Rect f1566b;

        /* renamed from: c  reason: collision with root package name */
        private final Rect f1567c;

        /* renamed from: d  reason: collision with root package name */
        private final Rect f1568d;

        /* renamed from: e  reason: collision with root package name */
        private final int f1569e;

        /* renamed from: f  reason: collision with root package name */
        private boolean f1570f;

        public q(Rect rect, Rect rect2, View view) {
            super(rect, view);
            this.f1569e = ViewConfiguration.get(view.getContext()).getScaledTouchSlop();
            this.f1566b = new Rect();
            this.f1568d = new Rect();
            this.f1567c = new Rect();
            a(rect, rect2);
            this.f1565a = view;
        }

        public void a(Rect rect, Rect rect2) {
            this.f1566b.set(rect);
            this.f1568d.set(rect);
            Rect rect3 = this.f1568d;
            int i10 = this.f1569e;
            rect3.inset(-i10, -i10);
            this.f1567c.set(rect2);
        }

        @Override // android.view.TouchDelegate
        public boolean onTouchEvent(MotionEvent motionEvent) {
            boolean z10;
            boolean z11;
            int x10 = (int) motionEvent.getX();
            int y10 = (int) motionEvent.getY();
            int action = motionEvent.getAction();
            boolean z12 = true;
            if (action != 0) {
                if (action != 1 && action != 2) {
                    if (action == 3) {
                        z11 = this.f1570f;
                        this.f1570f = false;
                    }
                    z10 = true;
                    z12 = false;
                } else {
                    z11 = this.f1570f;
                    if (z11 && !this.f1568d.contains(x10, y10)) {
                        z12 = z11;
                        z10 = false;
                    }
                }
                z12 = z11;
                z10 = true;
            } else {
                if (this.f1566b.contains(x10, y10)) {
                    this.f1570f = true;
                    z10 = true;
                }
                z10 = true;
                z12 = false;
            }
            if (!z12) {
                return false;
            }
            if (z10 && !this.f1567c.contains(x10, y10)) {
                motionEvent.setLocation(this.f1565a.getWidth() / 2, this.f1565a.getHeight() / 2);
            } else {
                Rect rect = this.f1567c;
                motionEvent.setLocation(x10 - rect.left, y10 - rect.top);
            }
            return this.f1565a.dispatchTouchEvent(motionEvent);
        }
    }

    static {
        o oVar;
        if (Build.VERSION.SDK_INT < 29) {
            oVar = new o();
        } else {
            oVar = null;
        }
        A0 = oVar;
    }

    public SearchView(Context context) {
        this(context, null);
    }

    private Intent A(String str, Uri uri, String str2, String str3, int i10, String str4) {
        Intent intent = new Intent(str);
        intent.addFlags(268435456);
        if (uri != null) {
            intent.setData(uri);
        }
        intent.putExtra("user_query", this.f1532m0);
        if (str3 != null) {
            intent.putExtra("query", str3);
        }
        if (str2 != null) {
            intent.putExtra("intent_extra_data_key", str2);
        }
        Bundle bundle = this.f1536q0;
        if (bundle != null) {
            intent.putExtra("app_data", bundle);
        }
        if (i10 != 0) {
            intent.putExtra("action_key", i10);
            intent.putExtra("action_msg", str4);
        }
        intent.setComponent(this.f1535p0.getSearchActivity());
        return intent;
    }

    private Intent B(Cursor cursor, int i10, String str) {
        int i11;
        Uri parse;
        String n10;
        try {
            String n11 = q0.n(cursor, "suggest_intent_action");
            if (n11 == null) {
                n11 = this.f1535p0.getSuggestIntentAction();
            }
            if (n11 == null) {
                n11 = "android.intent.action.SEARCH";
            }
            String str2 = n11;
            String n12 = q0.n(cursor, "suggest_intent_data");
            if (n12 == null) {
                n12 = this.f1535p0.getSuggestIntentData();
            }
            if (n12 != null && (n10 = q0.n(cursor, "suggest_intent_data_id")) != null) {
                n12 = n12 + "/" + Uri.encode(n10);
            }
            if (n12 == null) {
                parse = null;
            } else {
                parse = Uri.parse(n12);
            }
            return A(str2, parse, q0.n(cursor, "suggest_intent_extra_data"), q0.n(cursor, "suggest_intent_query"), i10, str);
        } catch (RuntimeException e10) {
            try {
                i11 = cursor.getPosition();
            } catch (RuntimeException unused) {
                i11 = -1;
            }
            Log.w("SearchView", "Search suggestions cursor at row " + i11 + " returned exception.", e10);
            return null;
        }
    }

    private Intent C(Intent intent, SearchableInfo searchableInfo) {
        String str;
        String str2;
        String str3;
        int i10;
        ComponentName searchActivity = searchableInfo.getSearchActivity();
        Intent intent2 = new Intent("android.intent.action.SEARCH");
        intent2.setComponent(searchActivity);
        PendingIntent activity = PendingIntent.getActivity(getContext(), 0, intent2, 1107296256);
        Bundle bundle = new Bundle();
        Bundle bundle2 = this.f1536q0;
        if (bundle2 != null) {
            bundle.putParcelable("app_data", bundle2);
        }
        Intent intent3 = new Intent(intent);
        Resources resources = getResources();
        if (searchableInfo.getVoiceLanguageModeId() != 0) {
            str = resources.getString(searchableInfo.getVoiceLanguageModeId());
        } else {
            str = "free_form";
        }
        String str4 = null;
        if (searchableInfo.getVoicePromptTextId() != 0) {
            str2 = resources.getString(searchableInfo.getVoicePromptTextId());
        } else {
            str2 = null;
        }
        if (searchableInfo.getVoiceLanguageId() != 0) {
            str3 = resources.getString(searchableInfo.getVoiceLanguageId());
        } else {
            str3 = null;
        }
        if (searchableInfo.getVoiceMaxResults() != 0) {
            i10 = searchableInfo.getVoiceMaxResults();
        } else {
            i10 = 1;
        }
        intent3.putExtra("android.speech.extra.LANGUAGE_MODEL", str);
        intent3.putExtra("android.speech.extra.PROMPT", str2);
        intent3.putExtra("android.speech.extra.LANGUAGE", str3);
        intent3.putExtra("android.speech.extra.MAX_RESULTS", i10);
        if (searchActivity != null) {
            str4 = searchActivity.flattenToShortString();
        }
        intent3.putExtra("calling_package", str4);
        intent3.putExtra("android.speech.extra.RESULTS_PENDINGINTENT", activity);
        intent3.putExtra("android.speech.extra.RESULTS_PENDINGINTENT_BUNDLE", bundle);
        return intent3;
    }

    private Intent D(Intent intent, SearchableInfo searchableInfo) {
        String flattenToShortString;
        Intent intent2 = new Intent(intent);
        ComponentName searchActivity = searchableInfo.getSearchActivity();
        if (searchActivity == null) {
            flattenToShortString = null;
        } else {
            flattenToShortString = searchActivity.flattenToShortString();
        }
        intent2.putExtra("calling_package", flattenToShortString);
        return intent2;
    }

    private void E() {
        this.A.dismissDropDown();
    }

    private void G(View view, Rect rect) {
        view.getLocationInWindow(this.M);
        getLocationInWindow(this.N);
        int[] iArr = this.M;
        int i10 = iArr[1];
        int[] iArr2 = this.N;
        int i11 = i10 - iArr2[1];
        int i12 = iArr[0] - iArr2[0];
        rect.set(i12, i11, view.getWidth() + i12, view.getHeight() + i11);
    }

    private CharSequence H(CharSequence charSequence) {
        if (this.f1522c0 && this.P != null) {
            int textSize = (int) (this.A.getTextSize() * 1.25d);
            this.P.setBounds(0, 0, textSize, textSize);
            SpannableStringBuilder spannableStringBuilder = new SpannableStringBuilder("   ");
            spannableStringBuilder.setSpan(new ImageSpan(this.P), 1, 2, 33);
            spannableStringBuilder.append(charSequence);
            return spannableStringBuilder;
        }
        return charSequence;
    }

    private boolean I() {
        Intent intent;
        SearchableInfo searchableInfo = this.f1535p0;
        if (searchableInfo != null && searchableInfo.getVoiceSearchEnabled()) {
            if (this.f1535p0.getVoiceSearchLaunchWebSearch()) {
                intent = this.S;
            } else if (this.f1535p0.getVoiceSearchLaunchRecognizer()) {
                intent = this.T;
            } else {
                intent = null;
            }
            if (intent != null && getContext().getPackageManager().resolveActivity(intent, 65536) != null) {
                return true;
            }
        }
        return false;
    }

    static boolean K(Context context) {
        if (context.getResources().getConfiguration().orientation == 2) {
            return true;
        }
        return false;
    }

    private boolean L() {
        if ((this.f1525f0 || this.f1530k0) && !J()) {
            return true;
        }
        return false;
    }

    private void M(Intent intent) {
        if (intent == null) {
            return;
        }
        try {
            getContext().startActivity(intent);
        } catch (RuntimeException e10) {
            Log.e("SearchView", "Failed launch activity: " + intent, e10);
        }
    }

    private boolean O(int i10, int i11, String str) {
        Cursor c10 = this.f1524e0.c();
        if (c10 != null && c10.moveToPosition(i10)) {
            M(B(c10, i11, str));
            return true;
        }
        return false;
    }

    private void Z() {
        post(this.f1537r0);
    }

    private void a0(int i10) {
        Editable text = this.A.getText();
        Cursor c10 = this.f1524e0.c();
        if (c10 == null) {
            return;
        }
        if (c10.moveToPosition(i10)) {
            CharSequence convertToString = this.f1524e0.convertToString(c10);
            if (convertToString != null) {
                setQuery(convertToString);
                return;
            } else {
                setQuery(text);
                return;
            }
        }
        setQuery(text);
    }

    private void c0() {
        boolean z10;
        int[] iArr;
        boolean isEmpty = TextUtils.isEmpty(this.A.getText());
        int i10 = 0;
        if (isEmpty && (!this.f1522c0 || this.f1533n0)) {
            z10 = false;
        } else {
            z10 = true;
        }
        ImageView imageView = this.G;
        if (!z10) {
            i10 = 8;
        }
        imageView.setVisibility(i10);
        Drawable drawable = this.G.getDrawable();
        if (drawable != null) {
            if (!isEmpty) {
                iArr = ViewGroup.ENABLED_STATE_SET;
            } else {
                iArr = ViewGroup.EMPTY_STATE_SET;
            }
            drawable.setState(iArr);
        }
    }

    private void e0() {
        CharSequence queryHint = getQueryHint();
        SearchAutoComplete searchAutoComplete = this.A;
        if (queryHint == null) {
            queryHint = "";
        }
        searchAutoComplete.setHint(H(queryHint));
    }

    private void f0() {
        this.A.setThreshold(this.f1535p0.getSuggestThreshold());
        this.A.setImeOptions(this.f1535p0.getImeOptions());
        int inputType = this.f1535p0.getInputType();
        int i10 = 1;
        if ((inputType & 15) == 1) {
            inputType &= -65537;
            if (this.f1535p0.getSuggestAuthority() != null) {
                inputType |= 589824;
            }
        }
        this.A.setInputType(inputType);
        s2.a aVar = this.f1524e0;
        if (aVar != null) {
            aVar.a(null);
        }
        if (this.f1535p0.getSuggestAuthority() != null) {
            q0 q0Var = new q0(getContext(), this, this.f1535p0, this.f1539t0);
            this.f1524e0 = q0Var;
            this.A.setAdapter(q0Var);
            q0 q0Var2 = (q0) this.f1524e0;
            if (this.f1527h0) {
                i10 = 2;
            }
            q0Var2.w(i10);
        }
    }

    private void g0() {
        int i10;
        if (L() && (this.F.getVisibility() == 0 || this.H.getVisibility() == 0)) {
            i10 = 0;
        } else {
            i10 = 8;
        }
        this.D.setVisibility(i10);
    }

    private int getPreferredHeight() {
        return getContext().getResources().getDimensionPixelSize(f.d.f23319e);
    }

    private int getPreferredWidth() {
        return getContext().getResources().getDimensionPixelSize(f.d.f23320f);
    }

    private void h0(boolean z10) {
        int i10;
        if (this.f1525f0 && L() && hasFocus() && (z10 || !this.f1530k0)) {
            i10 = 0;
        } else {
            i10 = 8;
        }
        this.F.setVisibility(i10);
    }

    private void i0(boolean z10) {
        int i10;
        int i11;
        this.f1523d0 = z10;
        int i12 = 8;
        if (z10) {
            i10 = 0;
        } else {
            i10 = 8;
        }
        boolean isEmpty = TextUtils.isEmpty(this.A.getText());
        this.E.setVisibility(i10);
        h0(!isEmpty);
        View view = this.B;
        if (z10) {
            i11 = 8;
        } else {
            i11 = 0;
        }
        view.setVisibility(i11);
        if (this.O.getDrawable() != null && !this.f1522c0) {
            i12 = 0;
        }
        this.O.setVisibility(i12);
        c0();
        j0(isEmpty);
        g0();
    }

    private void j0(boolean z10) {
        int i10 = 8;
        if (this.f1530k0 && !J() && z10) {
            this.F.setVisibility(8);
            i10 = 0;
        }
        this.H.setVisibility(i10);
    }

    private void setQuery(CharSequence charSequence) {
        int length;
        this.A.setText(charSequence);
        SearchAutoComplete searchAutoComplete = this.A;
        if (TextUtils.isEmpty(charSequence)) {
            length = 0;
        } else {
            length = charSequence.length();
        }
        searchAutoComplete.setSelection(length);
    }

    void F() {
        if (Build.VERSION.SDK_INT >= 29) {
            k.a(this.A);
            return;
        }
        o oVar = A0;
        oVar.b(this.A);
        oVar.a(this.A);
    }

    public boolean J() {
        return this.f1523d0;
    }

    void N(int i10, String str, String str2) {
        getContext().startActivity(A("android.intent.action.SEARCH", null, null, str2, i10, str));
    }

    void P() {
        if (TextUtils.isEmpty(this.A.getText())) {
            if (this.f1522c0) {
                l lVar = this.W;
                if (lVar == null || !lVar.a()) {
                    clearFocus();
                    i0(true);
                    return;
                }
                return;
            }
            return;
        }
        this.A.setText("");
        this.A.requestFocus();
        this.A.setImeVisibility(true);
    }

    boolean Q(int i10, int i11, String str) {
        O(i10, 0, null);
        this.A.setImeVisibility(false);
        E();
        return true;
    }

    boolean R(int i10) {
        a0(i10);
        return true;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void S(CharSequence charSequence) {
        setQuery(charSequence);
    }

    void T() {
        i0(false);
        this.A.requestFocus();
        this.A.setImeVisibility(true);
        View.OnClickListener onClickListener = this.f1521b0;
        if (onClickListener != null) {
            onClickListener.onClick(this);
        }
    }

    void U() {
        Editable text = this.A.getText();
        if (text != null && TextUtils.getTrimmedLength(text) > 0) {
            m mVar = this.V;
            if (mVar == null || !mVar.b(text.toString())) {
                if (this.f1535p0 != null) {
                    N(0, null, text.toString());
                }
                this.A.setImeVisibility(false);
                E();
            }
        }
    }

    boolean V(View view, int i10, KeyEvent keyEvent) {
        int length;
        if (this.f1535p0 != null && this.f1524e0 != null && keyEvent.getAction() == 0 && keyEvent.hasNoModifiers()) {
            if (i10 != 66 && i10 != 84 && i10 != 61) {
                if (i10 != 21 && i10 != 22) {
                    if (i10 == 19) {
                        this.A.getListSelection();
                        return false;
                    }
                } else {
                    if (i10 == 21) {
                        length = 0;
                    } else {
                        length = this.A.length();
                    }
                    this.A.setSelection(length);
                    this.A.setListSelection(0);
                    this.A.clearListSelection();
                    this.A.b();
                    return true;
                }
            } else {
                return Q(this.A.getListSelection(), 0, null);
            }
        }
        return false;
    }

    void W(CharSequence charSequence) {
        Editable text = this.A.getText();
        this.f1532m0 = text;
        boolean isEmpty = TextUtils.isEmpty(text);
        h0(!isEmpty);
        j0(isEmpty);
        c0();
        g0();
        if (this.V != null && !TextUtils.equals(charSequence, this.f1531l0)) {
            this.V.a(charSequence.toString());
        }
        this.f1531l0 = charSequence.toString();
    }

    void X() {
        i0(J());
        Z();
        if (this.A.hasFocus()) {
            F();
        }
    }

    void Y() {
        SearchableInfo searchableInfo = this.f1535p0;
        if (searchableInfo != null) {
            try {
                if (searchableInfo.getVoiceSearchLaunchWebSearch()) {
                    getContext().startActivity(D(this.S, searchableInfo));
                } else if (searchableInfo.getVoiceSearchLaunchRecognizer()) {
                    getContext().startActivity(C(this.T, searchableInfo));
                }
            } catch (ActivityNotFoundException unused) {
                Log.w("SearchView", "Could not find voice search activity");
            }
        }
    }

    public void b0(CharSequence charSequence, boolean z10) {
        this.A.setText(charSequence);
        if (charSequence != null) {
            SearchAutoComplete searchAutoComplete = this.A;
            searchAutoComplete.setSelection(searchAutoComplete.length());
            this.f1532m0 = charSequence;
        }
        if (z10 && !TextUtils.isEmpty(charSequence)) {
            U();
        }
    }

    @Override // android.view.ViewGroup, android.view.View
    public void clearFocus() {
        this.f1528i0 = true;
        super.clearFocus();
        this.A.clearFocus();
        this.A.setImeVisibility(false);
        this.f1528i0 = false;
    }

    void d0() {
        int[] iArr;
        if (this.A.hasFocus()) {
            iArr = ViewGroup.FOCUSED_STATE_SET;
        } else {
            iArr = ViewGroup.EMPTY_STATE_SET;
        }
        Drawable background = this.C.getBackground();
        if (background != null) {
            background.setState(iArr);
        }
        Drawable background2 = this.D.getBackground();
        if (background2 != null) {
            background2.setState(iArr);
        }
        invalidate();
    }

    public int getImeOptions() {
        return this.A.getImeOptions();
    }

    public int getInputType() {
        return this.A.getInputType();
    }

    public int getMaxWidth() {
        return this.f1529j0;
    }

    public CharSequence getQuery() {
        return this.A.getText();
    }

    public CharSequence getQueryHint() {
        CharSequence charSequence = this.f1526g0;
        if (charSequence != null) {
            return charSequence;
        }
        SearchableInfo searchableInfo = this.f1535p0;
        if (searchableInfo != null && searchableInfo.getHintId() != 0) {
            return getContext().getText(this.f1535p0.getHintId());
        }
        return this.U;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int getSuggestionCommitIconResId() {
        return this.R;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int getSuggestionRowLayout() {
        return this.Q;
    }

    public s2.a getSuggestionsAdapter() {
        return this.f1524e0;
    }

    @Override // androidx.appcompat.view.b
    public void onActionViewCollapsed() {
        b0("", false);
        clearFocus();
        i0(true);
        this.A.setImeOptions(this.f1534o0);
        this.f1533n0 = false;
    }

    @Override // androidx.appcompat.view.b
    public void onActionViewExpanded() {
        if (this.f1533n0) {
            return;
        }
        this.f1533n0 = true;
        int imeOptions = this.A.getImeOptions();
        this.f1534o0 = imeOptions;
        this.A.setImeOptions(imeOptions | 33554432);
        this.A.setText("");
        setIconified(false);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // android.view.ViewGroup, android.view.View
    public void onDetachedFromWindow() {
        removeCallbacks(this.f1537r0);
        post(this.f1538s0);
        super.onDetachedFromWindow();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // androidx.appcompat.widget.i0, android.view.ViewGroup, android.view.View
    public void onLayout(boolean z10, int i10, int i11, int i12, int i13) {
        super.onLayout(z10, i10, i11, i12, i13);
        if (z10) {
            G(this.A, this.K);
            Rect rect = this.L;
            Rect rect2 = this.K;
            rect.set(rect2.left, 0, rect2.right, i13 - i11);
            q qVar = this.J;
            if (qVar == null) {
                q qVar2 = new q(this.L, this.K, this.A);
                this.J = qVar2;
                setTouchDelegate(qVar2);
                return;
            }
            qVar.a(this.L, this.K);
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // androidx.appcompat.widget.i0, android.view.View
    public void onMeasure(int i10, int i11) {
        int i12;
        if (J()) {
            super.onMeasure(i10, i11);
            return;
        }
        int mode = View.MeasureSpec.getMode(i10);
        int size = View.MeasureSpec.getSize(i10);
        if (mode != Integer.MIN_VALUE) {
            if (mode != 0) {
                if (mode == 1073741824 && (i12 = this.f1529j0) > 0) {
                    size = Math.min(i12, size);
                }
            } else {
                size = this.f1529j0;
                if (size <= 0) {
                    size = getPreferredWidth();
                }
            }
        } else {
            int i13 = this.f1529j0;
            size = i13 > 0 ? Math.min(i13, size) : Math.min(getPreferredWidth(), size);
        }
        int mode2 = View.MeasureSpec.getMode(i11);
        int size2 = View.MeasureSpec.getSize(i11);
        if (mode2 != Integer.MIN_VALUE) {
            if (mode2 == 0) {
                size2 = getPreferredHeight();
            }
        } else {
            size2 = Math.min(getPreferredHeight(), size2);
        }
        super.onMeasure(View.MeasureSpec.makeMeasureSpec(size, 1073741824), View.MeasureSpec.makeMeasureSpec(size2, 1073741824));
    }

    @Override // android.view.View
    protected void onRestoreInstanceState(Parcelable parcelable) {
        if (!(parcelable instanceof p)) {
            super.onRestoreInstanceState(parcelable);
            return;
        }
        p pVar = (p) parcelable;
        super.onRestoreInstanceState(pVar.a());
        i0(pVar.f1564i);
        requestLayout();
    }

    @Override // android.view.View
    protected Parcelable onSaveInstanceState() {
        p pVar = new p(super.onSaveInstanceState());
        pVar.f1564i = J();
        return pVar;
    }

    @Override // android.view.View
    public void onWindowFocusChanged(boolean z10) {
        super.onWindowFocusChanged(z10);
        Z();
    }

    @Override // android.view.ViewGroup, android.view.View
    public boolean requestFocus(int i10, Rect rect) {
        if (this.f1528i0 || !isFocusable()) {
            return false;
        }
        if (!J()) {
            boolean requestFocus = this.A.requestFocus(i10, rect);
            if (requestFocus) {
                i0(false);
            }
            return requestFocus;
        }
        return super.requestFocus(i10, rect);
    }

    public void setAppSearchData(Bundle bundle) {
        this.f1536q0 = bundle;
    }

    public void setIconified(boolean z10) {
        if (z10) {
            P();
        } else {
            T();
        }
    }

    public void setIconifiedByDefault(boolean z10) {
        if (this.f1522c0 == z10) {
            return;
        }
        this.f1522c0 = z10;
        i0(z10);
        e0();
    }

    public void setImeOptions(int i10) {
        this.A.setImeOptions(i10);
    }

    public void setInputType(int i10) {
        this.A.setInputType(i10);
    }

    public void setMaxWidth(int i10) {
        this.f1529j0 = i10;
        requestLayout();
    }

    public void setOnCloseListener(l lVar) {
        this.W = lVar;
    }

    public void setOnQueryTextFocusChangeListener(View.OnFocusChangeListener onFocusChangeListener) {
        this.f1520a0 = onFocusChangeListener;
    }

    public void setOnQueryTextListener(m mVar) {
        this.V = mVar;
    }

    public void setOnSearchClickListener(View.OnClickListener onClickListener) {
        this.f1521b0 = onClickListener;
    }

    public void setOnSuggestionListener(n nVar) {
    }

    public void setQueryHint(CharSequence charSequence) {
        this.f1526g0 = charSequence;
        e0();
    }

    public void setQueryRefinementEnabled(boolean z10) {
        int i10;
        this.f1527h0 = z10;
        s2.a aVar = this.f1524e0;
        if (aVar instanceof q0) {
            q0 q0Var = (q0) aVar;
            if (z10) {
                i10 = 2;
            } else {
                i10 = 1;
            }
            q0Var.w(i10);
        }
    }

    public void setSearchableInfo(SearchableInfo searchableInfo) {
        this.f1535p0 = searchableInfo;
        if (searchableInfo != null) {
            f0();
            e0();
        }
        boolean I = I();
        this.f1530k0 = I;
        if (I) {
            this.A.setPrivateImeOptions("nm");
        }
        i0(J());
    }

    public void setSubmitButtonEnabled(boolean z10) {
        this.f1525f0 = z10;
        i0(J());
    }

    public void setSuggestionsAdapter(s2.a aVar) {
        this.f1524e0 = aVar;
        this.A.setAdapter(aVar);
    }

    void z() {
        int i10;
        int i11;
        if (this.I.getWidth() > 1) {
            Resources resources = getContext().getResources();
            int paddingLeft = this.C.getPaddingLeft();
            Rect rect = new Rect();
            boolean b10 = g1.b(this);
            if (this.f1522c0) {
                i10 = resources.getDimensionPixelSize(f.d.f23317c) + resources.getDimensionPixelSize(f.d.f23318d);
            } else {
                i10 = 0;
            }
            this.A.getDropDownBackground().getPadding(rect);
            if (b10) {
                i11 = -rect.left;
            } else {
                i11 = paddingLeft - (rect.left + i10);
            }
            this.A.setDropDownHorizontalOffset(i11);
            this.A.setDropDownWidth((((this.I.getWidth() + rect.left) + rect.right) + i10) - paddingLeft);
        }
    }

    public SearchView(Context context, AttributeSet attributeSet) {
        this(context, attributeSet, f.a.G);
    }

    public SearchView(Context context, AttributeSet attributeSet, int i10) {
        super(context, attributeSet, i10);
        this.K = new Rect();
        this.L = new Rect();
        this.M = new int[2];
        this.N = new int[2];
        this.f1537r0 = new b();
        this.f1538s0 = new c();
        this.f1539t0 = new WeakHashMap();
        f fVar = new f();
        this.f1540u0 = fVar;
        this.f1541v0 = new g();
        h hVar = new h();
        this.f1542w0 = hVar;
        i iVar = new i();
        this.f1543x0 = iVar;
        j jVar = new j();
        this.f1544y0 = jVar;
        this.f1545z0 = new a();
        v0 v10 = v0.v(context, attributeSet, f.j.f23446f2, i10, 0);
        androidx.core.view.h0.l0(this, context, f.j.f23446f2, attributeSet, v10.r(), i10, 0);
        LayoutInflater.from(context).inflate(v10.n(f.j.f23496p2, f.g.f23397r), (ViewGroup) this, true);
        SearchAutoComplete searchAutoComplete = (SearchAutoComplete) findViewById(f.f.E);
        this.A = searchAutoComplete;
        searchAutoComplete.setSearchView(this);
        this.B = findViewById(f.f.A);
        View findViewById = findViewById(f.f.D);
        this.C = findViewById;
        View findViewById2 = findViewById(f.f.K);
        this.D = findViewById2;
        ImageView imageView = (ImageView) findViewById(f.f.f23378y);
        this.E = imageView;
        ImageView imageView2 = (ImageView) findViewById(f.f.B);
        this.F = imageView2;
        ImageView imageView3 = (ImageView) findViewById(f.f.f23379z);
        this.G = imageView3;
        ImageView imageView4 = (ImageView) findViewById(f.f.F);
        this.H = imageView4;
        ImageView imageView5 = (ImageView) findViewById(f.f.C);
        this.O = imageView5;
        androidx.core.view.h0.r0(findViewById, v10.g(f.j.f23501q2));
        androidx.core.view.h0.r0(findViewById2, v10.g(f.j.f23521u2));
        imageView.setImageDrawable(v10.g(f.j.f23516t2));
        imageView2.setImageDrawable(v10.g(f.j.f23486n2));
        imageView3.setImageDrawable(v10.g(f.j.f23471k2));
        imageView4.setImageDrawable(v10.g(f.j.f23531w2));
        imageView5.setImageDrawable(v10.g(f.j.f23516t2));
        this.P = v10.g(f.j.f23511s2);
        a1.a(imageView, getResources().getString(f.h.f23413n));
        this.Q = v10.n(f.j.f23526v2, f.g.f23396q);
        this.R = v10.n(f.j.f23476l2, 0);
        imageView.setOnClickListener(fVar);
        imageView3.setOnClickListener(fVar);
        imageView2.setOnClickListener(fVar);
        imageView4.setOnClickListener(fVar);
        searchAutoComplete.setOnClickListener(fVar);
        searchAutoComplete.addTextChangedListener(this.f1545z0);
        searchAutoComplete.setOnEditorActionListener(hVar);
        searchAutoComplete.setOnItemClickListener(iVar);
        searchAutoComplete.setOnItemSelectedListener(jVar);
        searchAutoComplete.setOnKeyListener(this.f1541v0);
        searchAutoComplete.setOnFocusChangeListener(new d());
        setIconifiedByDefault(v10.a(f.j.f23491o2, true));
        int f10 = v10.f(f.j.f23456h2, -1);
        if (f10 != -1) {
            setMaxWidth(f10);
        }
        this.U = v10.p(f.j.f23481m2);
        this.f1526g0 = v10.p(f.j.f23506r2);
        int k10 = v10.k(f.j.f23466j2, -1);
        if (k10 != -1) {
            setImeOptions(k10);
        }
        int k11 = v10.k(f.j.f23461i2, -1);
        if (k11 != -1) {
            setInputType(k11);
        }
        setFocusable(v10.a(f.j.f23451g2, true));
        v10.x();
        Intent intent = new Intent("android.speech.action.WEB_SEARCH");
        this.S = intent;
        intent.addFlags(268435456);
        intent.putExtra("android.speech.extra.LANGUAGE_MODEL", "web_search");
        Intent intent2 = new Intent("android.speech.action.RECOGNIZE_SPEECH");
        this.T = intent2;
        intent2.addFlags(268435456);
        View findViewById3 = findViewById(searchAutoComplete.getDropDownAnchor());
        this.I = findViewById3;
        if (findViewById3 != null) {
            findViewById3.addOnLayoutChangeListener(new e());
        }
        i0(this.f1522c0);
        e0();
    }
}
