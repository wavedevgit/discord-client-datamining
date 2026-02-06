package androidx.appcompat.widget;

import android.app.SearchableInfo;
import android.content.ComponentName;
import android.content.Context;
import android.content.pm.ActivityInfo;
import android.content.pm.PackageManager;
import android.content.res.ColorStateList;
import android.content.res.Resources;
import android.database.Cursor;
import android.graphics.drawable.Drawable;
import android.net.Uri;
import android.os.Bundle;
import android.text.SpannableString;
import android.text.TextUtils;
import android.text.style.TextAppearanceSpan;
import android.util.Log;
import android.util.TypedValue;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.util.List;
import java.util.WeakHashMap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
class q0 extends s2.c implements View.OnClickListener {
    private final int A;
    private boolean B;
    private int C;
    private ColorStateList D;
    private int E;
    private int F;
    private int G;
    private int H;
    private int I;
    private int J;

    /* renamed from: w  reason: collision with root package name */
    private final SearchView f2221w;

    /* renamed from: x  reason: collision with root package name */
    private final SearchableInfo f2222x;

    /* renamed from: y  reason: collision with root package name */
    private final Context f2223y;

    /* renamed from: z  reason: collision with root package name */
    private final WeakHashMap f2224z;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        public final TextView f2225a;

        /* renamed from: b  reason: collision with root package name */
        public final TextView f2226b;

        /* renamed from: c  reason: collision with root package name */
        public final ImageView f2227c;

        /* renamed from: d  reason: collision with root package name */
        public final ImageView f2228d;

        /* renamed from: e  reason: collision with root package name */
        public final ImageView f2229e;

        public a(View view) {
            this.f2225a = (TextView) view.findViewById(16908308);
            this.f2226b = (TextView) view.findViewById(16908309);
            this.f2227c = (ImageView) view.findViewById(16908295);
            this.f2228d = (ImageView) view.findViewById(16908296);
            this.f2229e = (ImageView) view.findViewById(f.f.f22289r);
        }
    }

    public q0(Context context, SearchView searchView, SearchableInfo searchableInfo, WeakHashMap weakHashMap) {
        super(context, searchView.getSuggestionRowLayout(), null, true);
        this.B = false;
        this.C = 1;
        this.E = -1;
        this.F = -1;
        this.G = -1;
        this.H = -1;
        this.I = -1;
        this.J = -1;
        this.f2221w = searchView;
        this.f2222x = searchableInfo;
        this.A = searchView.getSuggestionCommitIconResId();
        this.f2223y = context;
        this.f2224z = weakHashMap;
    }

    private void A(Cursor cursor) {
        Bundle bundle;
        if (cursor != null) {
            bundle = cursor.getExtras();
        } else {
            bundle = null;
        }
        if (bundle != null) {
            bundle.getBoolean("in_progress");
        }
    }

    private Drawable j(String str) {
        Drawable.ConstantState constantState = (Drawable.ConstantState) this.f2224z.get(str);
        if (constantState == null) {
            return null;
        }
        return constantState.newDrawable();
    }

    private CharSequence k(CharSequence charSequence) {
        if (this.D == null) {
            TypedValue typedValue = new TypedValue();
            this.f2223y.getTheme().resolveAttribute(f.a.K, typedValue, true);
            this.D = this.f2223y.getResources().getColorStateList(typedValue.resourceId);
        }
        SpannableString spannableString = new SpannableString(charSequence);
        spannableString.setSpan(new TextAppearanceSpan(null, 0, 0, this.D, null), 0, charSequence.length(), 33);
        return spannableString;
    }

    private Drawable l(ComponentName componentName) {
        PackageManager packageManager = this.f2223y.getPackageManager();
        try {
            ActivityInfo activityInfo = packageManager.getActivityInfo(componentName, IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);
            int iconResource = activityInfo.getIconResource();
            if (iconResource == 0) {
                return null;
            }
            Drawable drawable = packageManager.getDrawable(componentName.getPackageName(), iconResource, activityInfo.applicationInfo);
            if (drawable == null) {
                Log.w("SuggestionsAdapter", "Invalid icon resource " + iconResource + " for " + componentName.flattenToShortString());
                return null;
            }
            return drawable;
        } catch (PackageManager.NameNotFoundException e10) {
            Log.w("SuggestionsAdapter", e10.toString());
            return null;
        }
    }

    private Drawable m(ComponentName componentName) {
        String flattenToShortString = componentName.flattenToShortString();
        Drawable.ConstantState constantState = null;
        if (this.f2224z.containsKey(flattenToShortString)) {
            Drawable.ConstantState constantState2 = (Drawable.ConstantState) this.f2224z.get(flattenToShortString);
            if (constantState2 == null) {
                return null;
            }
            return constantState2.newDrawable(this.f2223y.getResources());
        }
        Drawable l10 = l(componentName);
        if (l10 != null) {
            constantState = l10.getConstantState();
        }
        this.f2224z.put(flattenToShortString, constantState);
        return l10;
    }

    public static String n(Cursor cursor, String str) {
        return v(cursor, cursor.getColumnIndex(str));
    }

    private Drawable o() {
        Drawable m10 = m(this.f2222x.getSearchActivity());
        if (m10 != null) {
            return m10;
        }
        return this.f2223y.getPackageManager().getDefaultActivityIcon();
    }

    private Drawable p(Uri uri) {
        try {
            if ("android.resource".equals(uri.getScheme())) {
                try {
                    return q(uri);
                } catch (Resources.NotFoundException unused) {
                    throw new FileNotFoundException("Resource does not exist: " + uri);
                }
            }
            InputStream openInputStream = this.f2223y.getContentResolver().openInputStream(uri);
            if (openInputStream != null) {
                Drawable createFromStream = Drawable.createFromStream(openInputStream, null);
                try {
                    openInputStream.close();
                    return createFromStream;
                } catch (IOException e10) {
                    Log.e("SuggestionsAdapter", "Error closing icon stream for " + uri, e10);
                    return createFromStream;
                }
            }
            throw new FileNotFoundException("Failed to open " + uri);
        } catch (FileNotFoundException e11) {
            Log.w("SuggestionsAdapter", "Icon not found: " + uri + ", " + e11.getMessage());
            return null;
        }
        Log.w("SuggestionsAdapter", "Icon not found: " + uri + ", " + e11.getMessage());
        return null;
    }

    private Drawable r(String str) {
        if (str == null || str.isEmpty() || "0".equals(str)) {
            return null;
        }
        try {
            int parseInt = Integer.parseInt(str);
            String str2 = "android.resource://" + this.f2223y.getPackageName() + "/" + parseInt;
            Drawable j10 = j(str2);
            if (j10 != null) {
                return j10;
            }
            Drawable e10 = androidx.core.content.a.e(this.f2223y, parseInt);
            z(str2, e10);
            return e10;
        } catch (Resources.NotFoundException unused) {
            Log.w("SuggestionsAdapter", "Icon resource not found: " + str);
            return null;
        } catch (NumberFormatException unused2) {
            Drawable j11 = j(str);
            if (j11 != null) {
                return j11;
            }
            Drawable p10 = p(Uri.parse(str));
            z(str, p10);
            return p10;
        }
    }

    private Drawable s(Cursor cursor) {
        int i10 = this.H;
        if (i10 == -1) {
            return null;
        }
        Drawable r10 = r(cursor.getString(i10));
        if (r10 != null) {
            return r10;
        }
        return o();
    }

    private Drawable t(Cursor cursor) {
        int i10 = this.I;
        if (i10 == -1) {
            return null;
        }
        return r(cursor.getString(i10));
    }

    private static String v(Cursor cursor, int i10) {
        if (i10 == -1) {
            return null;
        }
        try {
            return cursor.getString(i10);
        } catch (Exception e10) {
            Log.e("SuggestionsAdapter", "unexpected error retrieving valid column from cursor, did the remote process die?", e10);
            return null;
        }
    }

    private void x(ImageView imageView, Drawable drawable, int i10) {
        imageView.setImageDrawable(drawable);
        if (drawable == null) {
            imageView.setVisibility(i10);
            return;
        }
        imageView.setVisibility(0);
        drawable.setVisible(false, false);
        drawable.setVisible(true, false);
    }

    private void y(TextView textView, CharSequence charSequence) {
        textView.setText(charSequence);
        if (TextUtils.isEmpty(charSequence)) {
            textView.setVisibility(8);
        } else {
            textView.setVisibility(0);
        }
    }

    private void z(String str, Drawable drawable) {
        if (drawable != null) {
            this.f2224z.put(str, drawable.getConstantState());
        }
    }

    @Override // s2.a, s2.b.a
    public void a(Cursor cursor) {
        if (this.B) {
            Log.w("SuggestionsAdapter", "Tried to change cursor after adapter was closed.");
            if (cursor != null) {
                cursor.close();
                return;
            }
            return;
        }
        try {
            super.a(cursor);
            if (cursor != null) {
                this.E = cursor.getColumnIndex("suggest_text_1");
                this.F = cursor.getColumnIndex("suggest_text_2");
                this.G = cursor.getColumnIndex("suggest_text_2_url");
                this.H = cursor.getColumnIndex("suggest_icon_1");
                this.I = cursor.getColumnIndex("suggest_icon_2");
                this.J = cursor.getColumnIndex("suggest_flags");
            }
        } catch (Exception e10) {
            Log.e("SuggestionsAdapter", "error changing cursor and caching columns", e10);
        }
    }

    @Override // s2.b.a
    public Cursor b(CharSequence charSequence) {
        String charSequence2;
        if (charSequence == null) {
            charSequence2 = "";
        } else {
            charSequence2 = charSequence.toString();
        }
        if (this.f2221w.getVisibility() == 0 && this.f2221w.getWindowVisibility() == 0) {
            try {
                Cursor u10 = u(this.f2222x, charSequence2, 50);
                if (u10 != null) {
                    u10.getCount();
                    return u10;
                }
            } catch (RuntimeException e10) {
                Log.w("SuggestionsAdapter", "Search suggestions query threw an exception.", e10);
            }
        }
        return null;
    }

    @Override // s2.a, s2.b.a
    public CharSequence convertToString(Cursor cursor) {
        String n10;
        String n11;
        if (cursor == null) {
            return null;
        }
        String n12 = n(cursor, "suggest_intent_query");
        if (n12 != null) {
            return n12;
        }
        if (this.f2222x.shouldRewriteQueryFromData() && (n11 = n(cursor, "suggest_intent_data")) != null) {
            return n11;
        }
        if (!this.f2222x.shouldRewriteQueryFromText() || (n10 = n(cursor, "suggest_text_1")) == null) {
            return null;
        }
        return n10;
    }

    @Override // s2.a
    public void d(View view, Context context, Cursor cursor) {
        int i10;
        CharSequence v10;
        a aVar = (a) view.getTag();
        int i11 = this.J;
        if (i11 != -1) {
            i10 = cursor.getInt(i11);
        } else {
            i10 = 0;
        }
        if (aVar.f2225a != null) {
            y(aVar.f2225a, v(cursor, this.E));
        }
        if (aVar.f2226b != null) {
            String v11 = v(cursor, this.G);
            if (v11 != null) {
                v10 = k(v11);
            } else {
                v10 = v(cursor, this.F);
            }
            if (TextUtils.isEmpty(v10)) {
                TextView textView = aVar.f2225a;
                if (textView != null) {
                    textView.setSingleLine(false);
                    aVar.f2225a.setMaxLines(2);
                }
            } else {
                TextView textView2 = aVar.f2225a;
                if (textView2 != null) {
                    textView2.setSingleLine(true);
                    aVar.f2225a.setMaxLines(1);
                }
            }
            y(aVar.f2226b, v10);
        }
        ImageView imageView = aVar.f2227c;
        if (imageView != null) {
            x(imageView, s(cursor), 4);
        }
        ImageView imageView2 = aVar.f2228d;
        if (imageView2 != null) {
            x(imageView2, t(cursor), 8);
        }
        int i12 = this.C;
        if (i12 != 2 && (i12 != 1 || (i10 & 1) == 0)) {
            aVar.f2229e.setVisibility(8);
            return;
        }
        aVar.f2229e.setVisibility(0);
        aVar.f2229e.setTag(aVar.f2225a.getText());
        aVar.f2229e.setOnClickListener(this);
    }

    @Override // s2.c, s2.a
    public View g(Context context, Cursor cursor, ViewGroup viewGroup) {
        View g10 = super.g(context, cursor, viewGroup);
        g10.setTag(new a(g10));
        ((ImageView) g10.findViewById(f.f.f22289r)).setImageResource(this.A);
        return g10;
    }

    @Override // s2.a, android.widget.BaseAdapter, android.widget.SpinnerAdapter
    public View getDropDownView(int i10, View view, ViewGroup viewGroup) {
        try {
            return super.getDropDownView(i10, view, viewGroup);
        } catch (RuntimeException e10) {
            Log.w("SuggestionsAdapter", "Search suggestions cursor threw exception.", e10);
            View f10 = f(this.f2223y, c(), viewGroup);
            if (f10 != null) {
                ((a) f10.getTag()).f2225a.setText(e10.toString());
            }
            return f10;
        }
    }

    @Override // s2.a, android.widget.Adapter
    public View getView(int i10, View view, ViewGroup viewGroup) {
        try {
            return super.getView(i10, view, viewGroup);
        } catch (RuntimeException e10) {
            Log.w("SuggestionsAdapter", "Search suggestions cursor threw exception.", e10);
            View g10 = g(this.f2223y, c(), viewGroup);
            if (g10 != null) {
                ((a) g10.getTag()).f2225a.setText(e10.toString());
            }
            return g10;
        }
    }

    @Override // android.widget.BaseAdapter, android.widget.Adapter
    public boolean hasStableIds() {
        return false;
    }

    @Override // android.widget.BaseAdapter
    public void notifyDataSetChanged() {
        super.notifyDataSetChanged();
        A(c());
    }

    @Override // android.widget.BaseAdapter
    public void notifyDataSetInvalidated() {
        super.notifyDataSetInvalidated();
        A(c());
    }

    @Override // android.view.View.OnClickListener
    public void onClick(View view) {
        Object tag = view.getTag();
        if (tag instanceof CharSequence) {
            this.f2221w.S((CharSequence) tag);
        }
    }

    Drawable q(Uri uri) {
        int parseInt;
        String authority = uri.getAuthority();
        if (!TextUtils.isEmpty(authority)) {
            try {
                Resources resourcesForApplication = this.f2223y.getPackageManager().getResourcesForApplication(authority);
                List<String> pathSegments = uri.getPathSegments();
                if (pathSegments != null) {
                    int size = pathSegments.size();
                    if (size == 1) {
                        try {
                            parseInt = Integer.parseInt(pathSegments.get(0));
                        } catch (NumberFormatException unused) {
                            throw new FileNotFoundException("Single path segment is not a resource ID: " + uri);
                        }
                    } else if (size == 2) {
                        parseInt = resourcesForApplication.getIdentifier(pathSegments.get(1), pathSegments.get(0), authority);
                    } else {
                        throw new FileNotFoundException("More than two path segments: " + uri);
                    }
                    if (parseInt != 0) {
                        return resourcesForApplication.getDrawable(parseInt);
                    }
                    throw new FileNotFoundException("No resource found for: " + uri);
                }
                throw new FileNotFoundException("No path: " + uri);
            } catch (PackageManager.NameNotFoundException unused2) {
                throw new FileNotFoundException("No package found for authority: " + uri);
            }
        }
        throw new FileNotFoundException("No authority: " + uri);
    }

    Cursor u(SearchableInfo searchableInfo, String str, int i10) {
        String suggestAuthority;
        String[] strArr = null;
        if (searchableInfo == null || (suggestAuthority = searchableInfo.getSuggestAuthority()) == null) {
            return null;
        }
        Uri.Builder fragment = new Uri.Builder().scheme("content").authority(suggestAuthority).query("").fragment("");
        String suggestPath = searchableInfo.getSuggestPath();
        if (suggestPath != null) {
            fragment.appendEncodedPath(suggestPath);
        }
        fragment.appendPath("search_suggest_query");
        String suggestSelection = searchableInfo.getSuggestSelection();
        if (suggestSelection != null) {
            strArr = new String[]{str};
        } else {
            fragment.appendPath(str);
        }
        String[] strArr2 = strArr;
        if (i10 > 0) {
            fragment.appendQueryParameter("limit", String.valueOf(i10));
        }
        return this.f2223y.getContentResolver().query(fragment.build(), null, suggestSelection, strArr2, null);
    }

    public void w(int i10) {
        this.C = i10;
    }
}
