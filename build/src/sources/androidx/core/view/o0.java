package androidx.core.view;

import android.view.View;
import android.view.ViewGroup;
import java.util.Iterator;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.markers.KMutableIterator;
import kotlin.sequences.Sequence;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class o0 {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a implements Sequence {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ ViewGroup f3539a;

        a(ViewGroup viewGroup) {
            this.f3539a = viewGroup;
        }

        @Override // kotlin.sequences.Sequence
        public Iterator iterator() {
            return o0.c(this.f3539a);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static final class b implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        public static final b f3540d = new b();

        b() {
        }

        @Override // kotlin.jvm.functions.Function1
        /* renamed from: a */
        public final Iterator invoke(View view) {
            ViewGroup viewGroup;
            Sequence a10;
            if (view instanceof ViewGroup) {
                viewGroup = (ViewGroup) view;
            } else {
                viewGroup = null;
            }
            if (viewGroup == null || (a10 = o0.a(viewGroup)) == null) {
                return null;
            }
            return a10.iterator();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class c implements Iterator, KMutableIterator {

        /* renamed from: d  reason: collision with root package name */
        private int f3541d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ ViewGroup f3542e;

        c(ViewGroup viewGroup) {
            this.f3542e = viewGroup;
        }

        @Override // java.util.Iterator
        /* renamed from: a */
        public View next() {
            ViewGroup viewGroup = this.f3542e;
            int i10 = this.f3541d;
            this.f3541d = i10 + 1;
            View childAt = viewGroup.getChildAt(i10);
            if (childAt != null) {
                return childAt;
            }
            throw new IndexOutOfBoundsException();
        }

        @Override // java.util.Iterator
        public boolean hasNext() {
            if (this.f3541d < this.f3542e.getChildCount()) {
                return true;
            }
            return false;
        }

        @Override // java.util.Iterator
        public void remove() {
            ViewGroup viewGroup = this.f3542e;
            int i10 = this.f3541d - 1;
            this.f3541d = i10;
            viewGroup.removeViewAt(i10);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class d implements Sequence {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ ViewGroup f3543a;

        public d(ViewGroup viewGroup) {
            this.f3543a = viewGroup;
        }

        @Override // kotlin.sequences.Sequence
        public Iterator iterator() {
            return new e0(o0.a(this.f3543a).iterator(), b.f3540d);
        }
    }

    public static final Sequence a(ViewGroup viewGroup) {
        return new a(viewGroup);
    }

    public static final Sequence b(ViewGroup viewGroup) {
        return new d(viewGroup);
    }

    public static final Iterator c(ViewGroup viewGroup) {
        return new c(viewGroup);
    }
}
