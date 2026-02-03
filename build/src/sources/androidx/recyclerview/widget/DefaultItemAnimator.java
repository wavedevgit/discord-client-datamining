package androidx.recyclerview.widget;

import android.animation.Animator;
import android.animation.AnimatorListenerAdapter;
import android.animation.TimeInterpolator;
import android.animation.ValueAnimator;
import android.annotation.SuppressLint;
import android.view.View;
import android.view.ViewPropertyAnimator;
import androidx.annotation.NonNull;
import androidx.core.view.h0;
import androidx.recyclerview.widget.RecyclerView;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class DefaultItemAnimator extends q {
    private static final boolean DEBUG = false;
    private static TimeInterpolator sDefaultInterpolator;
    private ArrayList<RecyclerView.ViewHolder> mPendingRemovals = new ArrayList<>();
    private ArrayList<RecyclerView.ViewHolder> mPendingAdditions = new ArrayList<>();
    private ArrayList<i> mPendingMoves = new ArrayList<>();
    private ArrayList<ChangeInfo> mPendingChanges = new ArrayList<>();
    ArrayList<ArrayList<RecyclerView.ViewHolder>> mAdditionsList = new ArrayList<>();
    ArrayList<ArrayList<i>> mMovesList = new ArrayList<>();
    ArrayList<ArrayList<ChangeInfo>> mChangesList = new ArrayList<>();
    ArrayList<RecyclerView.ViewHolder> mAddAnimations = new ArrayList<>();
    ArrayList<RecyclerView.ViewHolder> mMoveAnimations = new ArrayList<>();
    ArrayList<RecyclerView.ViewHolder> mRemoveAnimations = new ArrayList<>();
    ArrayList<RecyclerView.ViewHolder> mChangeAnimations = new ArrayList<>();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class a implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ ArrayList f4729d;

        a(ArrayList arrayList) {
            this.f4729d = arrayList;
        }

        @Override // java.lang.Runnable
        public void run() {
            Iterator it = this.f4729d.iterator();
            while (it.hasNext()) {
                i iVar = (i) it.next();
                DefaultItemAnimator.this.animateMoveImpl(iVar.f4757a, iVar.f4758b, iVar.f4759c, iVar.f4760d, iVar.f4761e);
            }
            this.f4729d.clear();
            DefaultItemAnimator.this.mMovesList.remove(this.f4729d);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class b implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ ArrayList f4731d;

        b(ArrayList arrayList) {
            this.f4731d = arrayList;
        }

        @Override // java.lang.Runnable
        public void run() {
            Iterator it = this.f4731d.iterator();
            while (it.hasNext()) {
                DefaultItemAnimator.this.animateChangeImpl((ChangeInfo) it.next());
            }
            this.f4731d.clear();
            DefaultItemAnimator.this.mChangesList.remove(this.f4731d);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class c implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ ArrayList f4733d;

        c(ArrayList arrayList) {
            this.f4733d = arrayList;
        }

        @Override // java.lang.Runnable
        public void run() {
            Iterator it = this.f4733d.iterator();
            while (it.hasNext()) {
                DefaultItemAnimator.this.animateAddImpl((RecyclerView.ViewHolder) it.next());
            }
            this.f4733d.clear();
            DefaultItemAnimator.this.mAdditionsList.remove(this.f4733d);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class d extends AnimatorListenerAdapter {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ RecyclerView.ViewHolder f4735a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ ViewPropertyAnimator f4736b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ View f4737c;

        d(RecyclerView.ViewHolder viewHolder, ViewPropertyAnimator viewPropertyAnimator, View view) {
            this.f4735a = viewHolder;
            this.f4736b = viewPropertyAnimator;
            this.f4737c = view;
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationEnd(Animator animator) {
            this.f4736b.setListener(null);
            this.f4737c.setAlpha(1.0f);
            DefaultItemAnimator.this.dispatchRemoveFinished(this.f4735a);
            DefaultItemAnimator.this.mRemoveAnimations.remove(this.f4735a);
            DefaultItemAnimator.this.dispatchFinishedWhenDone();
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationStart(Animator animator) {
            DefaultItemAnimator.this.dispatchRemoveStarting(this.f4735a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class e extends AnimatorListenerAdapter {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ RecyclerView.ViewHolder f4739a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ View f4740b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ ViewPropertyAnimator f4741c;

        e(RecyclerView.ViewHolder viewHolder, View view, ViewPropertyAnimator viewPropertyAnimator) {
            this.f4739a = viewHolder;
            this.f4740b = view;
            this.f4741c = viewPropertyAnimator;
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationCancel(Animator animator) {
            this.f4740b.setAlpha(1.0f);
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationEnd(Animator animator) {
            this.f4741c.setListener(null);
            DefaultItemAnimator.this.dispatchAddFinished(this.f4739a);
            DefaultItemAnimator.this.mAddAnimations.remove(this.f4739a);
            DefaultItemAnimator.this.dispatchFinishedWhenDone();
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationStart(Animator animator) {
            DefaultItemAnimator.this.dispatchAddStarting(this.f4739a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class f extends AnimatorListenerAdapter {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ RecyclerView.ViewHolder f4743a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ int f4744b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ View f4745c;

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ int f4746d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ ViewPropertyAnimator f4747e;

        f(RecyclerView.ViewHolder viewHolder, int i10, View view, int i11, ViewPropertyAnimator viewPropertyAnimator) {
            this.f4743a = viewHolder;
            this.f4744b = i10;
            this.f4745c = view;
            this.f4746d = i11;
            this.f4747e = viewPropertyAnimator;
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationCancel(Animator animator) {
            if (this.f4744b != 0) {
                this.f4745c.setTranslationX(0.0f);
            }
            if (this.f4746d != 0) {
                this.f4745c.setTranslationY(0.0f);
            }
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationEnd(Animator animator) {
            this.f4747e.setListener(null);
            DefaultItemAnimator.this.dispatchMoveFinished(this.f4743a);
            DefaultItemAnimator.this.mMoveAnimations.remove(this.f4743a);
            DefaultItemAnimator.this.dispatchFinishedWhenDone();
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationStart(Animator animator) {
            DefaultItemAnimator.this.dispatchMoveStarting(this.f4743a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class g extends AnimatorListenerAdapter {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ ChangeInfo f4749a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ ViewPropertyAnimator f4750b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ View f4751c;

        g(ChangeInfo changeInfo, ViewPropertyAnimator viewPropertyAnimator, View view) {
            this.f4749a = changeInfo;
            this.f4750b = viewPropertyAnimator;
            this.f4751c = view;
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationEnd(Animator animator) {
            this.f4750b.setListener(null);
            this.f4751c.setAlpha(1.0f);
            this.f4751c.setTranslationX(0.0f);
            this.f4751c.setTranslationY(0.0f);
            DefaultItemAnimator.this.dispatchChangeFinished(this.f4749a.f4723a, true);
            DefaultItemAnimator.this.mChangeAnimations.remove(this.f4749a.f4723a);
            DefaultItemAnimator.this.dispatchFinishedWhenDone();
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationStart(Animator animator) {
            DefaultItemAnimator.this.dispatchChangeStarting(this.f4749a.f4723a, true);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class h extends AnimatorListenerAdapter {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ ChangeInfo f4753a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ ViewPropertyAnimator f4754b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ View f4755c;

        h(ChangeInfo changeInfo, ViewPropertyAnimator viewPropertyAnimator, View view) {
            this.f4753a = changeInfo;
            this.f4754b = viewPropertyAnimator;
            this.f4755c = view;
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationEnd(Animator animator) {
            this.f4754b.setListener(null);
            this.f4755c.setAlpha(1.0f);
            this.f4755c.setTranslationX(0.0f);
            this.f4755c.setTranslationY(0.0f);
            DefaultItemAnimator.this.dispatchChangeFinished(this.f4753a.f4724b, false);
            DefaultItemAnimator.this.mChangeAnimations.remove(this.f4753a.f4724b);
            DefaultItemAnimator.this.dispatchFinishedWhenDone();
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationStart(Animator animator) {
            DefaultItemAnimator.this.dispatchChangeStarting(this.f4753a.f4724b, false);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class i {

        /* renamed from: a  reason: collision with root package name */
        public RecyclerView.ViewHolder f4757a;

        /* renamed from: b  reason: collision with root package name */
        public int f4758b;

        /* renamed from: c  reason: collision with root package name */
        public int f4759c;

        /* renamed from: d  reason: collision with root package name */
        public int f4760d;

        /* renamed from: e  reason: collision with root package name */
        public int f4761e;

        i(RecyclerView.ViewHolder viewHolder, int i10, int i11, int i12, int i13) {
            this.f4757a = viewHolder;
            this.f4758b = i10;
            this.f4759c = i11;
            this.f4760d = i12;
            this.f4761e = i13;
        }
    }

    private void a(RecyclerView.ViewHolder viewHolder) {
        View view = viewHolder.itemView;
        ViewPropertyAnimator animate = view.animate();
        this.mRemoveAnimations.add(viewHolder);
        animate.setDuration(getRemoveDuration()).alpha(0.0f).setListener(new d(viewHolder, animate, view)).start();
    }

    private void b(List list, RecyclerView.ViewHolder viewHolder) {
        for (int size = list.size() - 1; size >= 0; size--) {
            ChangeInfo changeInfo = (ChangeInfo) list.get(size);
            if (d(changeInfo, viewHolder) && changeInfo.f4723a == null && changeInfo.f4724b == null) {
                list.remove(changeInfo);
            }
        }
    }

    private void c(ChangeInfo changeInfo) {
        RecyclerView.ViewHolder viewHolder = changeInfo.f4723a;
        if (viewHolder != null) {
            d(changeInfo, viewHolder);
        }
        RecyclerView.ViewHolder viewHolder2 = changeInfo.f4724b;
        if (viewHolder2 != null) {
            d(changeInfo, viewHolder2);
        }
    }

    private boolean d(ChangeInfo changeInfo, RecyclerView.ViewHolder viewHolder) {
        boolean z10 = false;
        if (changeInfo.f4724b == viewHolder) {
            changeInfo.f4724b = null;
        } else if (changeInfo.f4723a != viewHolder) {
            return false;
        } else {
            changeInfo.f4723a = null;
            z10 = true;
        }
        viewHolder.itemView.setAlpha(1.0f);
        viewHolder.itemView.setTranslationX(0.0f);
        viewHolder.itemView.setTranslationY(0.0f);
        dispatchChangeFinished(viewHolder, z10);
        return true;
    }

    private void e(RecyclerView.ViewHolder viewHolder) {
        if (sDefaultInterpolator == null) {
            sDefaultInterpolator = new ValueAnimator().getInterpolator();
        }
        viewHolder.itemView.animate().setInterpolator(sDefaultInterpolator);
        endAnimation(viewHolder);
    }

    @Override // androidx.recyclerview.widget.q
    public boolean animateAdd(RecyclerView.ViewHolder viewHolder) {
        e(viewHolder);
        viewHolder.itemView.setAlpha(0.0f);
        this.mPendingAdditions.add(viewHolder);
        return true;
    }

    void animateAddImpl(RecyclerView.ViewHolder viewHolder) {
        View view = viewHolder.itemView;
        ViewPropertyAnimator animate = view.animate();
        this.mAddAnimations.add(viewHolder);
        animate.alpha(1.0f).setDuration(getAddDuration()).setListener(new e(viewHolder, view, animate)).start();
    }

    @Override // androidx.recyclerview.widget.q
    public boolean animateChange(RecyclerView.ViewHolder viewHolder, RecyclerView.ViewHolder viewHolder2, int i10, int i11, int i12, int i13) {
        if (viewHolder == viewHolder2) {
            return animateMove(viewHolder, i10, i11, i12, i13);
        }
        float translationX = viewHolder.itemView.getTranslationX();
        float translationY = viewHolder.itemView.getTranslationY();
        float alpha = viewHolder.itemView.getAlpha();
        e(viewHolder);
        int i14 = (int) ((i12 - i10) - translationX);
        int i15 = (int) ((i13 - i11) - translationY);
        viewHolder.itemView.setTranslationX(translationX);
        viewHolder.itemView.setTranslationY(translationY);
        viewHolder.itemView.setAlpha(alpha);
        if (viewHolder2 != null) {
            e(viewHolder2);
            viewHolder2.itemView.setTranslationX(-i14);
            viewHolder2.itemView.setTranslationY(-i15);
            viewHolder2.itemView.setAlpha(0.0f);
        }
        this.mPendingChanges.add(new ChangeInfo(viewHolder, viewHolder2, i10, i11, i12, i13));
        return true;
    }

    void animateChangeImpl(ChangeInfo changeInfo) {
        View view;
        RecyclerView.ViewHolder viewHolder = changeInfo.f4723a;
        View view2 = null;
        if (viewHolder == null) {
            view = null;
        } else {
            view = viewHolder.itemView;
        }
        RecyclerView.ViewHolder viewHolder2 = changeInfo.f4724b;
        if (viewHolder2 != null) {
            view2 = viewHolder2.itemView;
        }
        if (view != null) {
            ViewPropertyAnimator duration = view.animate().setDuration(getChangeDuration());
            this.mChangeAnimations.add(changeInfo.f4723a);
            duration.translationX(changeInfo.f4727e - changeInfo.f4725c);
            duration.translationY(changeInfo.f4728f - changeInfo.f4726d);
            duration.alpha(0.0f).setListener(new g(changeInfo, duration, view)).start();
        }
        if (view2 != null) {
            ViewPropertyAnimator animate = view2.animate();
            this.mChangeAnimations.add(changeInfo.f4724b);
            animate.translationX(0.0f).translationY(0.0f).setDuration(getChangeDuration()).alpha(1.0f).setListener(new h(changeInfo, animate, view2)).start();
        }
    }

    @Override // androidx.recyclerview.widget.q
    public boolean animateMove(RecyclerView.ViewHolder viewHolder, int i10, int i11, int i12, int i13) {
        View view = viewHolder.itemView;
        int translationX = i10 + ((int) view.getTranslationX());
        int translationY = i11 + ((int) viewHolder.itemView.getTranslationY());
        e(viewHolder);
        int i14 = i12 - translationX;
        int i15 = i13 - translationY;
        if (i14 == 0 && i15 == 0) {
            dispatchMoveFinished(viewHolder);
            return false;
        }
        if (i14 != 0) {
            view.setTranslationX(-i14);
        }
        if (i15 != 0) {
            view.setTranslationY(-i15);
        }
        this.mPendingMoves.add(new i(viewHolder, translationX, translationY, i12, i13));
        return true;
    }

    void animateMoveImpl(RecyclerView.ViewHolder viewHolder, int i10, int i11, int i12, int i13) {
        View view = viewHolder.itemView;
        int i14 = i12 - i10;
        int i15 = i13 - i11;
        if (i14 != 0) {
            view.animate().translationX(0.0f);
        }
        if (i15 != 0) {
            view.animate().translationY(0.0f);
        }
        ViewPropertyAnimator animate = view.animate();
        this.mMoveAnimations.add(viewHolder);
        animate.setDuration(getMoveDuration()).setListener(new f(viewHolder, i14, view, i15, animate)).start();
    }

    @Override // androidx.recyclerview.widget.q
    public boolean animateRemove(RecyclerView.ViewHolder viewHolder) {
        e(viewHolder);
        this.mPendingRemovals.add(viewHolder);
        return true;
    }

    @Override // androidx.recyclerview.widget.RecyclerView.ItemAnimator
    public boolean canReuseUpdatedViewHolder(@NonNull RecyclerView.ViewHolder viewHolder, @NonNull List<Object> list) {
        if (list.isEmpty() && !super.canReuseUpdatedViewHolder(viewHolder, list)) {
            return false;
        }
        return true;
    }

    void cancelAll(List<RecyclerView.ViewHolder> list) {
        for (int size = list.size() - 1; size >= 0; size--) {
            list.get(size).itemView.animate().cancel();
        }
    }

    void dispatchFinishedWhenDone() {
        if (!isRunning()) {
            dispatchAnimationsFinished();
        }
    }

    @Override // androidx.recyclerview.widget.RecyclerView.ItemAnimator
    @SuppressLint({"UnknownNullness"})
    public void endAnimation(RecyclerView.ViewHolder viewHolder) {
        View view = viewHolder.itemView;
        view.animate().cancel();
        int size = this.mPendingMoves.size();
        while (true) {
            size--;
            if (size < 0) {
                break;
            } else if (this.mPendingMoves.get(size).f4757a == viewHolder) {
                view.setTranslationY(0.0f);
                view.setTranslationX(0.0f);
                dispatchMoveFinished(viewHolder);
                this.mPendingMoves.remove(size);
            }
        }
        b(this.mPendingChanges, viewHolder);
        if (this.mPendingRemovals.remove(viewHolder)) {
            view.setAlpha(1.0f);
            dispatchRemoveFinished(viewHolder);
        }
        if (this.mPendingAdditions.remove(viewHolder)) {
            view.setAlpha(1.0f);
            dispatchAddFinished(viewHolder);
        }
        for (int size2 = this.mChangesList.size() - 1; size2 >= 0; size2--) {
            ArrayList<ChangeInfo> arrayList = this.mChangesList.get(size2);
            b(arrayList, viewHolder);
            if (arrayList.isEmpty()) {
                this.mChangesList.remove(size2);
            }
        }
        for (int size3 = this.mMovesList.size() - 1; size3 >= 0; size3--) {
            ArrayList<i> arrayList2 = this.mMovesList.get(size3);
            int size4 = arrayList2.size() - 1;
            while (true) {
                if (size4 < 0) {
                    break;
                } else if (arrayList2.get(size4).f4757a == viewHolder) {
                    view.setTranslationY(0.0f);
                    view.setTranslationX(0.0f);
                    dispatchMoveFinished(viewHolder);
                    arrayList2.remove(size4);
                    if (arrayList2.isEmpty()) {
                        this.mMovesList.remove(size3);
                    }
                } else {
                    size4--;
                }
            }
        }
        for (int size5 = this.mAdditionsList.size() - 1; size5 >= 0; size5--) {
            ArrayList<RecyclerView.ViewHolder> arrayList3 = this.mAdditionsList.get(size5);
            if (arrayList3.remove(viewHolder)) {
                view.setAlpha(1.0f);
                dispatchAddFinished(viewHolder);
                if (arrayList3.isEmpty()) {
                    this.mAdditionsList.remove(size5);
                }
            }
        }
        this.mRemoveAnimations.remove(viewHolder);
        this.mAddAnimations.remove(viewHolder);
        this.mChangeAnimations.remove(viewHolder);
        this.mMoveAnimations.remove(viewHolder);
        dispatchFinishedWhenDone();
    }

    @Override // androidx.recyclerview.widget.RecyclerView.ItemAnimator
    public void endAnimations() {
        int size = this.mPendingMoves.size();
        while (true) {
            size--;
            if (size < 0) {
                break;
            }
            i iVar = this.mPendingMoves.get(size);
            View view = iVar.f4757a.itemView;
            view.setTranslationY(0.0f);
            view.setTranslationX(0.0f);
            dispatchMoveFinished(iVar.f4757a);
            this.mPendingMoves.remove(size);
        }
        for (int size2 = this.mPendingRemovals.size() - 1; size2 >= 0; size2--) {
            dispatchRemoveFinished(this.mPendingRemovals.get(size2));
            this.mPendingRemovals.remove(size2);
        }
        int size3 = this.mPendingAdditions.size();
        while (true) {
            size3--;
            if (size3 < 0) {
                break;
            }
            RecyclerView.ViewHolder viewHolder = this.mPendingAdditions.get(size3);
            viewHolder.itemView.setAlpha(1.0f);
            dispatchAddFinished(viewHolder);
            this.mPendingAdditions.remove(size3);
        }
        for (int size4 = this.mPendingChanges.size() - 1; size4 >= 0; size4--) {
            c(this.mPendingChanges.get(size4));
        }
        this.mPendingChanges.clear();
        if (!isRunning()) {
            return;
        }
        for (int size5 = this.mMovesList.size() - 1; size5 >= 0; size5--) {
            ArrayList<i> arrayList = this.mMovesList.get(size5);
            for (int size6 = arrayList.size() - 1; size6 >= 0; size6--) {
                i iVar2 = arrayList.get(size6);
                View view2 = iVar2.f4757a.itemView;
                view2.setTranslationY(0.0f);
                view2.setTranslationX(0.0f);
                dispatchMoveFinished(iVar2.f4757a);
                arrayList.remove(size6);
                if (arrayList.isEmpty()) {
                    this.mMovesList.remove(arrayList);
                }
            }
        }
        for (int size7 = this.mAdditionsList.size() - 1; size7 >= 0; size7--) {
            ArrayList<RecyclerView.ViewHolder> arrayList2 = this.mAdditionsList.get(size7);
            for (int size8 = arrayList2.size() - 1; size8 >= 0; size8--) {
                RecyclerView.ViewHolder viewHolder2 = arrayList2.get(size8);
                viewHolder2.itemView.setAlpha(1.0f);
                dispatchAddFinished(viewHolder2);
                arrayList2.remove(size8);
                if (arrayList2.isEmpty()) {
                    this.mAdditionsList.remove(arrayList2);
                }
            }
        }
        for (int size9 = this.mChangesList.size() - 1; size9 >= 0; size9--) {
            ArrayList<ChangeInfo> arrayList3 = this.mChangesList.get(size9);
            for (int size10 = arrayList3.size() - 1; size10 >= 0; size10--) {
                c(arrayList3.get(size10));
                if (arrayList3.isEmpty()) {
                    this.mChangesList.remove(arrayList3);
                }
            }
        }
        cancelAll(this.mRemoveAnimations);
        cancelAll(this.mMoveAnimations);
        cancelAll(this.mAddAnimations);
        cancelAll(this.mChangeAnimations);
        dispatchAnimationsFinished();
    }

    @Override // androidx.recyclerview.widget.RecyclerView.ItemAnimator
    public boolean isRunning() {
        if (this.mPendingAdditions.isEmpty() && this.mPendingChanges.isEmpty() && this.mPendingMoves.isEmpty() && this.mPendingRemovals.isEmpty() && this.mMoveAnimations.isEmpty() && this.mRemoveAnimations.isEmpty() && this.mAddAnimations.isEmpty() && this.mChangeAnimations.isEmpty() && this.mMovesList.isEmpty() && this.mAdditionsList.isEmpty() && this.mChangesList.isEmpty()) {
            return false;
        }
        return true;
    }

    @Override // androidx.recyclerview.widget.RecyclerView.ItemAnimator
    public void runPendingAnimations() {
        long j10;
        long j11;
        boolean isEmpty = this.mPendingRemovals.isEmpty();
        boolean isEmpty2 = this.mPendingMoves.isEmpty();
        boolean isEmpty3 = this.mPendingChanges.isEmpty();
        boolean isEmpty4 = this.mPendingAdditions.isEmpty();
        if (!isEmpty || !isEmpty2 || !isEmpty4 || !isEmpty3) {
            Iterator<RecyclerView.ViewHolder> it = this.mPendingRemovals.iterator();
            while (it.hasNext()) {
                a(it.next());
            }
            this.mPendingRemovals.clear();
            if (!isEmpty2) {
                ArrayList<i> arrayList = new ArrayList<>();
                arrayList.addAll(this.mPendingMoves);
                this.mMovesList.add(arrayList);
                this.mPendingMoves.clear();
                a aVar = new a(arrayList);
                if (!isEmpty) {
                    h0.g0(arrayList.get(0).f4757a.itemView, aVar, getRemoveDuration());
                } else {
                    aVar.run();
                }
            }
            if (!isEmpty3) {
                ArrayList<ChangeInfo> arrayList2 = new ArrayList<>();
                arrayList2.addAll(this.mPendingChanges);
                this.mChangesList.add(arrayList2);
                this.mPendingChanges.clear();
                b bVar = new b(arrayList2);
                if (!isEmpty) {
                    h0.g0(arrayList2.get(0).f4723a.itemView, bVar, getRemoveDuration());
                } else {
                    bVar.run();
                }
            }
            if (!isEmpty4) {
                ArrayList<RecyclerView.ViewHolder> arrayList3 = new ArrayList<>();
                arrayList3.addAll(this.mPendingAdditions);
                this.mAdditionsList.add(arrayList3);
                this.mPendingAdditions.clear();
                c cVar = new c(arrayList3);
                if (isEmpty && isEmpty2 && isEmpty3) {
                    cVar.run();
                    return;
                }
                long j12 = 0;
                if (!isEmpty) {
                    j10 = getRemoveDuration();
                } else {
                    j10 = 0;
                }
                if (!isEmpty2) {
                    j11 = getMoveDuration();
                } else {
                    j11 = 0;
                }
                if (!isEmpty3) {
                    j12 = getChangeDuration();
                }
                h0.g0(arrayList3.get(0).itemView, cVar, j10 + Math.max(j11, j12));
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class ChangeInfo {

        /* renamed from: a  reason: collision with root package name */
        public RecyclerView.ViewHolder f4723a;

        /* renamed from: b  reason: collision with root package name */
        public RecyclerView.ViewHolder f4724b;

        /* renamed from: c  reason: collision with root package name */
        public int f4725c;

        /* renamed from: d  reason: collision with root package name */
        public int f4726d;

        /* renamed from: e  reason: collision with root package name */
        public int f4727e;

        /* renamed from: f  reason: collision with root package name */
        public int f4728f;

        private ChangeInfo(RecyclerView.ViewHolder viewHolder, RecyclerView.ViewHolder viewHolder2) {
            this.f4723a = viewHolder;
            this.f4724b = viewHolder2;
        }

        public String toString() {
            return "ChangeInfo{oldHolder=" + this.f4723a + ", newHolder=" + this.f4724b + ", fromX=" + this.f4725c + ", fromY=" + this.f4726d + ", toX=" + this.f4727e + ", toY=" + this.f4728f + '}';
        }

        ChangeInfo(RecyclerView.ViewHolder viewHolder, RecyclerView.ViewHolder viewHolder2, int i10, int i11, int i12, int i13) {
            this(viewHolder, viewHolder2);
            this.f4725c = i10;
            this.f4726d = i11;
            this.f4727e = i12;
            this.f4728f = i13;
        }
    }
}
