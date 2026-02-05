package jm;

import android.text.Editable;
import android.text.TextWatcher;
import android.view.View;
import android.view.ViewParent;
import android.widget.EditText;
import androidx.recyclerview.widget.RecyclerView;
import com.facebook.react.views.scroll.ReactScrollView;
import com.facebook.react.views.textinput.ReactEditText;
import java.lang.reflect.Field;
import java.util.ArrayList;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function6;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Ref;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class c {
    public static final Function0 b(EditText editText, Function6 action) {
        Intrinsics.checkNotNullParameter(editText, "<this>");
        Intrinsics.checkNotNullParameter(action, "action");
        final e eVar = new e(editText, action);
        eVar.j();
        return new Function0() { // from class: jm.b
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit c10;
                c10 = c.c(e.this);
                return c10;
            }
        };
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit c(e eVar) {
        eVar.i();
        return Unit.f31988a;
    }

    public static final TextWatcher d(EditText editText, Function1 action) {
        ArrayList<Object> arrayList;
        Intrinsics.checkNotNullParameter(editText, "<this>");
        Intrinsics.checkNotNullParameter(action, "action");
        a aVar = new a(new Ref.ObjectRef(), action);
        try {
            Field declaredField = ReactEditText.class.getDeclaredField("mListeners");
            Intrinsics.checkNotNullExpressionValue(declaredField, "getDeclaredField(...)");
            declaredField.setAccessible(true);
            Object obj = declaredField.get(editText);
            if (obj instanceof ArrayList) {
                arrayList = (ArrayList) obj;
            } else {
                arrayList = null;
            }
            if (arrayList != null) {
                if (!arrayList.isEmpty()) {
                    for (Object obj2 : arrayList) {
                        if (!(obj2 instanceof TextWatcher)) {
                        }
                    }
                }
                arrayList.add(0, aVar);
                return aVar;
            }
            nm.a.f(nm.a.f41373a, editText.getClass().getSimpleName(), "Can not attach listener because `fieldValue` does not belong to `ArrayList<TextWatcher>`", null, 4, null);
            return aVar;
        } catch (ClassCastException e10) {
            nm.a aVar2 = nm.a.f41373a;
            String simpleName = editText.getClass().getSimpleName();
            String message = e10.getMessage();
            nm.a.f(aVar2, simpleName, "Can not attach listener because casting failed: " + message, null, 4, null);
            return aVar;
        } catch (IllegalArgumentException e11) {
            nm.a aVar3 = nm.a.f41373a;
            String simpleName2 = editText.getClass().getSimpleName();
            String message2 = e11.getMessage();
            nm.a.f(aVar3, simpleName2, "Can not attach listener to be the first in the list: " + message2 + ". Attaching to the end...", null, 4, null);
            editText.addTextChangedListener(aVar);
            return aVar;
        } catch (NoSuchFieldException e12) {
            nm.a aVar4 = nm.a.f41373a;
            String simpleName3 = editText.getClass().getSimpleName();
            String message3 = e12.getMessage();
            nm.a.f(aVar4, simpleName3, "Can not attach listener because field `mListeners` not found: " + message3 + ". Attaching to the end...", null, 4, null);
            editText.addTextChangedListener(aVar);
            return aVar;
        }
    }

    public static final void e(EditText editText) {
        if (editText instanceof ReactEditText) {
            ((ReactEditText) editText).requestFocusFromJS();
        } else if (editText != null) {
            editText.requestFocus();
        }
    }

    public static final String f(EditText editText) {
        if (editText == null) {
            return "default";
        }
        int inputType = editText.getInputType() & 15;
        int inputType2 = editText.getInputType() & 4080;
        if (inputType2 == 32) {
            return "email-address";
        }
        if (inputType2 == 16) {
            return "url";
        }
        if (inputType2 == 144) {
            return "visible-password";
        }
        if (inputType == 2) {
            if ((editText.getInputType() & 8192) != 0 && (editText.getInputType() & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) == 0) {
                return "decimal-pad";
            }
            if ((editText.getInputType() & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 0) {
                return "numeric";
            }
            return "number-pad";
        } else if (inputType != 3) {
            return "default";
        } else {
            return "phone-pad";
        }
    }

    /* JADX WARN: Multi-variable type inference failed */
    /* JADX WARN: Type inference failed for: r2v7, types: [android.view.View] */
    public static final int g(EditText editText) {
        Intrinsics.checkNotNullParameter(editText, "<this>");
        while (editText != null) {
            ViewParent parent = editText.getParent();
            if (parent instanceof View) {
                editText = (View) parent;
            } else {
                editText = null;
            }
            if (editText instanceof ReactScrollView) {
                ReactScrollView reactScrollView = (ReactScrollView) editText;
                if (reactScrollView.getScrollEnabled()) {
                    return reactScrollView.getId();
                }
            }
        }
        return -1;
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements TextWatcher {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Ref.ObjectRef f31030d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Function1 f31031e;

        a(Ref.ObjectRef objectRef, Function1 function1) {
            this.f31030d = objectRef;
            this.f31031e = function1;
        }

        /* JADX WARN: Multi-variable type inference failed */
        /* JADX WARN: Type inference failed for: r1v1, types: [T, java.lang.Object, java.lang.String] */
        @Override // android.text.TextWatcher
        public void onTextChanged(CharSequence charSequence, int i10, int i11, int i12) {
            ?? valueOf = String.valueOf(charSequence);
            if (!Intrinsics.areEqual((Object) valueOf, this.f31030d.element)) {
                this.f31030d.element = valueOf;
                this.f31031e.invoke(valueOf);
            }
        }

        @Override // android.text.TextWatcher
        public void afterTextChanged(Editable editable) {
        }

        @Override // android.text.TextWatcher
        public void beforeTextChanged(CharSequence charSequence, int i10, int i11, int i12) {
        }
    }
}
